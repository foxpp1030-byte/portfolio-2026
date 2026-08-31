// 1920 기준 모션 거리를 뷰포트 너비에 맞춰 조절합니다.
const fluid = (value) => `${value}rem`;

$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

// header GNB side menu
$(function(){
    const menu = document.querySelector('.side-menu');
    const dim = document.querySelector('.side-menu-dim');
    const openButton = document.querySelector('.menuBox .button');
    const headerNav = document.querySelector('.innerHeader > nav');
    const menuLinks = document.querySelectorAll('[data-menu-link]');

    if (!menu || !dim || !openButton) return;

    const setMenuWidth = () => {
        if (!headerNav) return;
        const navLeft = headerNav.getBoundingClientRect().left;
        const menuWidth = Math.ceil(window.innerWidth - navLeft);
        menu.style.setProperty('--side-menu-width', `${menuWidth}px`);
    };

    const openMenu = () => {
        setMenuWidth();
        document.body.classList.add('side-menu-open');
        menu.classList.add('is-open');
        dim.classList.add('is-open');
        menu.setAttribute('aria-hidden', 'false');
        menu.removeAttribute('inert');
        dim.setAttribute('aria-hidden', 'false');
        openButton.setAttribute('aria-expanded', 'true');
        openButton.setAttribute('aria-label', '메뉴 닫기');
    };

    const closeMenu = (restoreFocus = true) => {
        document.body.classList.remove('side-menu-open');
        menu.classList.remove('is-open');
        dim.classList.remove('is-open');
        menu.setAttribute('aria-hidden', 'true');
        menu.setAttribute('inert', '');
        dim.setAttribute('aria-hidden', 'true');
        openButton.setAttribute('aria-expanded', 'false');
        openButton.setAttribute('aria-label', '메뉴 열기');
        if (restoreFocus) openButton.focus();
    };

    openButton.addEventListener('click', () => {
        if (menu.classList.contains('is-open')) closeMenu(true);
        else openMenu();
    });
    dim.addEventListener('click', () => closeMenu(true));
    menuLinks.forEach((link) => link.addEventListener('click', () => closeMenu(false)));
    window.addEventListener('resize', () => {
        if (menu.classList.contains('is-open')) setMenuWidth();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menu.classList.contains('is-open')) closeMenu(true);
    });
});

// GNB / 내부 앵커 부드러운 섹션 이동
// fixed header와 GSAP ScrollTrigger의 pin-spacer 때문에 기본 해시 점프가
// 실제 보이는 위치와 어긋날 수 있어, 현재 레이아웃 기준 좌표를 다시 계산해 이동합니다.
$(function(){
    const internalLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    let navScrollTimer = null;

    const getHeaderOffset = () => {
        const header = document.querySelector('header');
        return header ? Math.ceil(header.getBoundingClientRect().height + 12) : 0;
    };

    const finishNavScroll = () => {
        document.body.classList.remove('nav-scrolling');
        document.querySelector('header')?.classList.remove('active');
        if (navScrollTimer) {
            window.clearTimeout(navScrollTimer);
            navScrollTimer = null;
        }
    };

    const scrollToHash = (hash, updateHistory = true) => {
        if (!hash || hash === '#') return;
        const target = document.querySelector(hash);
        if (!target) return;

        // pin이 들어간 섹션들의 실제 문서 높이를 먼저 최신화합니다.
        if (window.ScrollTrigger) ScrollTrigger.refresh();

        const targetTop = Math.max(0, window.scrollY + target.getBoundingClientRect().top - getHeaderOffset());
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        document.body.classList.add('nav-scrolling');
        document.querySelector('header')?.classList.remove('active');

        window.scrollTo({
            top: targetTop,
            behavior: reduceMotion ? 'auto' : 'smooth'
        });

        if (updateHistory && window.location.hash !== hash) {
            history.pushState(null, '', hash);
        }

        // scrollend 미지원 브라우저 대비 fallback
        if (navScrollTimer) window.clearTimeout(navScrollTimer);
        navScrollTimer = window.setTimeout(finishNavScroll, reduceMotion ? 80 : 1200);
    };

    internalLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            const hash = link.getAttribute('href');
            if (!hash || hash === '#') return;
            if (!document.querySelector(hash)) return;

            event.preventDefault();
            // 사이드 메뉴 닫힘/overflow 해제가 같은 클릭에서 먼저 반영되도록 한 프레임 뒤 이동
            window.requestAnimationFrame(() => scrollToHash(hash, true));
        });
    });

    if ('onscrollend' in window) {
        window.addEventListener('scrollend', () => {
            if (document.body.classList.contains('nav-scrolling')) finishNavScroll();
        });
    }
});


// Recent Work 프로젝트 상세 모달
$(function(){
    const projects = [
        {
            title: '프로쉬', period: '2026.05 ~ 07', role: 'ONS WEB | UX/UI Designer',
            scope: ['브랜드 요구사항·상품 구조 분석 및 화면 기획', '전 페이지 PC·MO UX/UI 디자인', '브랜드사 커뮤니케이션 · 개발 협업 · UI QA'],
            tools: 'Figma, Photoshop, Illustrator',
            result: ['브랜드 스토리 중심 구조를 상품 탐색·구매 중심의 커머스 흐름으로 재구성', '메인·상품·혜택·리뷰·멤버십·마이페이지까지 화면 톤과 정보 우선순위 통일', '기획부터 실제 개발 화면 QA까지 연결해 서비스 구현 완료'],
            contribution: 'UX 기획 · UI Design 100% · Client Communication · QA', detail: 'project/frosch/index.html',
            image: null, media: [], figma: '#', site: '#', landing: '#'
        },
        {
            title: 'BRITA', period: '2026.04 ~ 05', role: 'ONS WEB | UX/UI Designer',
            scope: ['브랜드 요구사항 분석 및 전체 UX 구조 설계', '전 페이지 PC·MO UX/UI 디자인', 'Component 정리 · 개발 협업 · UI QA'],
            tools: 'Figma, Photoshop, Illustrator',
            result: ['필터 제품·구독·선택 가이드·컨설팅·견적 요청 등 복잡한 정보를 사용 목적 기준으로 구조화', '구매·정보 탐색·상담 흐름을 하나의 UI 체계로 연결', '브랜드 비주얼과 사용성을 일관된 디지털 경험으로 정리'],
            contribution: 'UX 기획 · UI Design 100% · Development Collaboration · QA', detail: 'project/brita/index.html',
            image: null, media: [], figma: '#', site: '#', landing: '#'
        },
        {
            title: '듀로우', period: '2026.04', role: 'ONS WEB | UX/UI Designer',
            scope: ['신규 브랜드몰 화면 구조 및 UX Flow 기획', '전 페이지 PC·MO UX/UI 디자인', '반복 UI 기준 정리 · 개발 협업 · UI QA'],
            tools: 'Figma, Photoshop, Illustrator',
            result: ['신규 구축 단계부터 브랜드 아이덴티티와 상품 탐색·구매 사용성을 함께 설계', '플랫폼 구현 조건을 고려해 실제 개발 가능한 UI 구조로 정리', '브랜드몰 전체 화면의 시각 언어와 반복 UI 기준 통일'],
            contribution: 'UX 기획 · UI Design 100% · Development Collaboration', detail: 'project/dewrow/index.html',
            image: null, media: [], figma: '#', site: '#', landing: '#'
        },
        {
            title: '컴프레스포트', period: '2026.05', role: 'ONS WEB | UX/UI Designer',
            scope: ['기존 사이트 및 서비스 구조 분석 · 리뉴얼 화면 기획', '전 페이지 PC·MO UX/UI 디자인', '브랜드사 커뮤니케이션 · 개발 협업 · UI QA'], tools: 'Figma, Photoshop, Illustrator',
            result: ['러닝 퍼포먼스 제품의 특성과 사용 목적을 쉽게 이해하고 탐색할 수 있도록 커머스와 브랜드 경험을 연결'], contribution: '100% 단독 디자인 및 제안 진행', detail: 'project/compressport/index.html',
            image: null, media: [], figma: '#', site: '#', landing: '#'
        },
        {
            title: '알루바프로', period: '2026.04 ~ 05', role: 'ONS WEB | UX/UI Designer',
            scope: ['기존 사이트 및 서비스 구조 분석 · 화면 기획', 'PC·MO UX/UI 디자인', '상품 상세 4가지 옵션·대량구매 문의·고객센터 UI 설계', '브랜드사 커뮤니케이션 · 개발 협업 · UI QA'], tools: 'Figma, Photoshop, Illustrator',
            result: ['다양한 규격과 옵션을 쉽게 비교하고 선택할 수 있도록 구매 정보의 우선순위와 커머스 흐름을 정리'], contribution: '100% 단독 디자인 및 제안 진행', detail: 'project/aluvapro/index.html',
            image: null, media: [], figma: '#', site: '#', landing: '#'
        },
        {
            title: '더비랩', period: '2026.02', role: 'ONS WEB | UX/UI Designer',
            scope: ['기존 사이트 및 서비스 구조 분석 · 리뉴얼 화면 기획', '전 페이지 PC·MO UX/UI 디자인', '브랜드사 커뮤니케이션 · 개발 협업 · UI QA'], tools: 'Figma, Photoshop, Illustrator',
            result: ['스마트폰 사용 제한 제품의 목적과 사용 방법을 직관적으로 전달하고 구매까지 자연스럽게 이어지도록 정보 구조와 UI를 개선'], contribution: '100% 단독 디자인 및 제안 진행', detail: 'project/theblab/index.html',
            image: null, media: [], figma: '#', site: '#', landing: '#'
        },
        {
            title: '웰리오', period: '2025.10 ~ 11 · SIDE PROJECT', role: '막시무스 | UX/UI Designer',
            scope: ['사용자·시장 리서치 및 서비스 방향성 도출', '페르소나 · IA · User Flow 설계', '가족 건강관리 서비스 기능 및 화면 기획', '디자인 시스템 및 주요 앱 화면 UX/UI 디자인', '프로토타입 제작'], tools: 'Figma, Photoshop, AI',
            result: ['건강 기록·병원 업무·가족 간 소통을 하나로 연결한 올인원 가족 건강관리 앱 경험 설계'], contribution: '로그인·온보딩 플로우 및 화면 디자인 · 디자인 시스템 구축', detail: 'project/wellio/index.html',
            image: null, media: [], figma: 'https://www.figma.com/proto/xVk6HzTia2kur1sEIdgzV9/2026-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?node-id=1-402&viewport=153%2C112%2C0.35&t=jbGl5zik3YKxEPWw-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A402&page-id=0%3A1', site: 'https://www.figma.com/proto/tNJoRiFkPGrBVQYrP3Eloz/2026-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85?node-id=1-16737&p=f&viewport=340%2C927%2C0.14&t=Xyspa0ajUC0wOw6v-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A16737&page-id=0%3A1', landing: '#'
        },
        {
            title: '헤이', period: '2025.10 ~ 12 · SIDE PROJECT', role: '막시무스 | UX/UI Designer',
            scope: ['사용자·시장 리서치 및 서비스 방향성 도출', '페르소나 · IA · User Flow 설계', '가족 건강관리 서비스 기능 및 화면 기획', '디자인 시스템 및 주요 앱 화면 UX/UI 디자인', '프로토타입 제작'], tools: 'Figma, Photoshop, AI',
            result: ['건강 루틴을 쉽고 재미있게 관리할 수 있도록 AI 캐릭터와 커뮤니티 기반의 지속 참여 경험 설계'], contribution: '커뮤니티 플로우 및 화면 디자인 · 디자인 시스템 구축', detail: 'project/hey/index.html',
            image: null, media: [], figma: '#', site: '#', landing: '#'
        },
        {
            title: '그로서리스터프', period: '2026.03 · 06', role: 'ONS WEB | UX/UI Designer',
            scope: ['브랜드 요구사항 반영 및 화면 기획', '담당 범위 전 페이지 PC·MO UX/UI 디자인', '개발 협업 · UI QA'], tools: 'Figma, Photoshop, Illustrator',
            result: ['상품 탐색과 정보 전달 흐름을 기준으로 신규 화면 제작 및 운영 화면 리디자인', '상품 정보의 가독성과 쇼핑 과정의 화면 일관성을 중심으로 UI 정리'],
            contribution: 'UX/UI Design 100% · Development Collaboration · QA', detail: 'project/grocery-stuff/index.html',
            image: null, media: [], figma: '#', site: '#', landing: '#'
        },
        {
            title: 'brembo', period: '2026.02', role: 'ONS WEB | UX/UI Designer',
            scope: ['브랜드 비주얼 및 요구사항 분석', 'PC·MO UX/UI 디자인', '개발 협업 · 구현 QA'], tools: 'Figma, Photoshop, Illustrator',
            result: ['강한 퍼포먼스 이미지를 유지하면서 상품 탐색과 구매 흐름을 재구성', 'PC·MO 화면에서 일관된 사용자 경험이 유지되도록 UI 기준 적용'],
            contribution: 'UX/UI Design · Development Collaboration · QA', detail: 'project/brembo/index.html',
            image: null, media: [], figma: '#', site: '#', landing: '#'
        }
    ];

    const panel = document.querySelector('.project-detail');
    const dim = document.querySelector('.project-detail-dim');
    const closeButton = document.querySelector('.project-detail-close');
    const detailInner = document.querySelector('.project-detail-inner');
    const detailEmbed = document.querySelector('.project-detail-embed');
    const detailFrame = document.querySelector('#project-detail-frame');
    const cards = document.querySelectorAll('.con02 .workList > li > a');
    let lastFocusedCard = null;
    let frameResetTimer = null;

    if (!panel || !dim || !closeButton || !detailInner || !detailEmbed || !detailFrame || !cards.length) return;

    const setText = (selector, value) => {
        const element = document.querySelector(selector);
        if (element) element.textContent = value || '-';
    };

    const setLines = (selector, lines) => {
        const element = document.querySelector(selector);
        if (!element) return;
        element.replaceChildren();
        (lines && lines.length ? lines : ['-']).forEach((line) => {
            const span = document.createElement('span');
            span.textContent = line;
            element.appendChild(span);
        });
    };

    const setLink = (selector, url) => {
        const link = document.querySelector(selector);
        if (!link) return;
        const isDisabled = !url || url === '#';
        link.href = url || '#';
        link.setAttribute('aria-disabled', String(isDisabled));
        link.tabIndex = 0;
    };

    const renderMedia = (project) => {
        const mediaList = document.querySelector('#project-detail-media-list');
        if (!mediaList) return;
        mediaList.replaceChildren();

        const mediaItems = project.media && project.media.length
            ? project.media
            : [project.image];

        mediaItems.filter(Boolean).forEach((source, index) => {
            const figure = document.createElement('figure');
            figure.className = 'project-detail-media';

            const media = document.createElement('img');
            media.src = source;
            media.alt = `${project.title} 프로젝트 상세 이미지 ${index + 1}`;
            media.loading = index === 0 ? 'eager' : 'lazy';

            figure.appendChild(media);
            mediaList.appendChild(figure);
        });
    };

    const openPanel = (card, project) => {
        lastFocusedCard = card;
        const image = document.querySelector('#project-detail-image');
        const hasEmbeddedDetail = Boolean(project.detail);

        if (frameResetTimer) {
            window.clearTimeout(frameResetTimer);
            frameResetTimer = null;
        }

        detailInner.classList.toggle('has-embedded-detail', hasEmbeddedDetail);
        detailEmbed.setAttribute('aria-hidden', String(!hasEmbeddedDetail));

        if (hasEmbeddedDetail) {
            detailFrame.title = `${project.title} 프로젝트 상세`;
            detailFrame.style.height = '720px';
            detailFrame.src = project.detail;
        } else {
            detailFrame.src = 'about:blank';
        }

        setText('#project-detail-period', project.period);
        setText('#project-detail-title', project.title);
        setText('#project-detail-role', project.role);
        setLines('#project-detail-scope', project.scope);
        setText('#project-detail-tools', project.tools);
        setLines('#project-detail-result', project.result);
        setText('#project-detail-contribution', project.contribution);
        setLink('#project-link-figma', project.figma);
        setLink('#project-link-site', project.site);
        setLink('#project-link-landing', project.landing);
        renderMedia(project);

        if (image) {
            image.src = project.image;
            image.alt = `${project.title} 프로젝트 이미지`;
        }

        document.body.classList.add('project-detail-open');
        dim.classList.add('is-open');
        dim.setAttribute('aria-hidden', 'false');
        panel.classList.add('is-open');
        panel.setAttribute('aria-hidden', 'false');
        panel.removeAttribute('inert');
        panel.scrollTop = 0;
        window.setTimeout(() => {
            if (hasEmbeddedDetail) detailFrame.focus();
            else closeButton.focus();
        }, 450);
    };

    const closePanel = () => {
        document.body.classList.remove('project-detail-open');
        dim.classList.remove('is-open');
        dim.setAttribute('aria-hidden', 'true');
        panel.classList.remove('is-open');
        panel.setAttribute('aria-hidden', 'true');
        panel.setAttribute('inert', '');
        frameResetTimer = window.setTimeout(() => {
            detailFrame.src = 'about:blank';
            detailFrame.style.height = '720px';
            detailInner.classList.remove('has-embedded-detail');
            detailEmbed.setAttribute('aria-hidden', 'true');
            frameResetTimer = null;
        }, 400);
        const orbitViewport = document.querySelector('.project-orbit-viewport');
        if (orbitViewport) orbitViewport.focus();
        else if (lastFocusedCard) lastFocusedCard.focus();
    };

    cards.forEach((card, index) => {
        const project = projects[index];
        if (!project) return;
        const cardImage = card.querySelector('img');
        project.image = cardImage ? cardImage.getAttribute('src') : '';

        card.setAttribute('aria-haspopup', 'dialog');
        card.addEventListener('click', (event) => {
            event.preventDefault();
            openPanel(card, project);
        });
    });

    closeButton.addEventListener('click', closePanel);
    dim.addEventListener('click', closePanel);
    panel.addEventListener('click', (event) => {
        if (event.target === panel) closePanel();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && panel.classList.contains('is-open')) closePanel();
    });

    window.addEventListener('message', (event) => {
        if (event.source !== detailFrame.contentWindow || !event.data) return;

        if (event.data.type === 'project-detail-close') {
            closePanel();
            return;
        }

        if (event.data.type === 'project-detail-resize') {
            const nextHeight = Number(event.data.height);
            if (Number.isFinite(nextHeight) && nextHeight > 0) {
                detailFrame.style.height = `${Math.ceil(nextHeight)}px`;
            }
        }
    });

    document.querySelectorAll('.project-link').forEach((link) => {
        link.addEventListener('click', (event) => {
            if (link.getAttribute('aria-disabled') === 'true') event.preventDefault();
        });
    });
});


$(function(){
    let prevScrollTop = 0;
    document.addEventListener("scroll", function(){
    const nowScrollTop = $(window).scrollTop();

    if(document.body.classList.contains('side-menu-open') || document.body.classList.contains('nav-scrolling')) {
        prevScrollTop = nowScrollTop;
        return;
    }
    if(nowScrollTop > prevScrollTop){$('header').addClass('active')}
    else{$('header').removeClass('active')}
    prevScrollTop = nowScrollTop;

    });
});

$(function(){
    $('.gnb > li > a').on('click', function(){
        const gnbindex = $('.gnb > li > a').index($(this));
        $('.gnb > li').removeClass('on');
        $('.gnb > li:eq('+ gnbindex +')').addClass('on');
        $('.gnb > li > a').removeClass('on');
        $('.gnb > li > a:eq('+ gnbindex +')').addClass('on');
    });
   
});



// about 스크롤 애니
$(function() {
	$('.animate').scrolla({
		mobile: true,
		once: false
	});    
});

$(function(){
    Splitting();
});
     


// 05 .con2의 my work 모션
// start/end 타이밍 맞춘 기준 : My work 글씨가 화면에 보이자마자 글씨가 모이면서 글씨가 중앙에 왔을 때 종료되는 시점

$(function(){
    gsap.registerPlugin(ScrollTrigger);

// .01 visual intro
// 배/집/선/별 없이 구름부터 시작.
// 첫 구름만 6번 방식(opacity + 아래→위)으로 움직이고,
// 뒤쪽 cloud 요소들은 5번의 기존 동작을 그대로 유지합니다.
const visualIntro = gsap.timeline({
    scrollTrigger:{
        trigger:'.visual',
        start:'0% 0%',
        // 최초 코드의 빠른 인트로 진행 속도 유지
        end:'60% 50%',
        // 휠의 계단식 스크롤 값을 길게 보간해 따다닥 끊기는 느낌만 제거
        scrub:2.5,
    }
})

// 5번에서 전역 .cloud에 걸리던 값을 뒤쪽 구름에 그대로 보존
.fromTo('.lineDesign .cloud, .whitecloud > .cloud, .whitecloud .blackcloud .cloud',
    { y: fluid(700) },
    { y:0, ease:'none', duration:5 }, 0)

// 첫 인트로 구름만 6번 방식
.fromTo('.visual .cloud',
    { y: fluid(420), opacity:0, force3D:true },
    { y:0, opacity:1, force3D:true, ease:'power1.inOut', duration:5 }, 0)
.fromTo('.visual .txtBox p',
    { y: fluid(900), opacity:0, force3D:true },
    { y:0, opacity:1, force3D:true, ease:'power1.inOut', duration:5 }, 1)
.fromTo('.visual .txtBox h2',
    { y: fluid(1200), opacity:0, force3D:true },
    { y:0, opacity:1, force3D:true, ease:'power1.inOut', duration:5 }, 1.5)
// Portfolio 제목이 완전히 올라온 뒤 원과 선을 순서대로 노출
.fromTo('.uiux .lineBox .circleBox',
    { autoAlpha:0, scale:0.85 },
    { autoAlpha:1, scale:1, ease:'power1.out', duration:0.5 }, 6.5)
.fromTo('.uiux .lineBox .line',
    { width:'0%', autoAlpha:0, x:'50%', xPercent:'-50%' },
    { width:'100%', autoAlpha:1, ease:'power1.inOut', duration:1.5 }, 6.7)


//.ui/ux/ .lineBox
gsap.timeline({
    scrollTrigger:{
        trigger:'.uiux',
        start:'0% 80%',
        end: '10% 50%',
        scrub:1,
    }
})
.fromTo('.uiux .txtBox p', { y: fluid(900), opacity:0 }, { y:0,opacity: 1,  ease:'none', duration:5},1)

//.lineDesign
$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var txtElement = $('.txt');

        // 스크롤이 특정 위치(예: 200rem) 이상 내려갔을 때 효과 적용
        if (scroll >= 50) {
            txtElement.addClass('active');
        } else {
            txtElement.removeClass('active');
        }
    });
});

//.lineDesign
gsap.timeline({
    scrollTrigger:{
        trigger:'.lineDesign',
        start:'0% 80%',
        end: '30% 50%',
        scrub:1,
    }
})
.fromTo('.bird', { x: fluid(-400), opacity:0 }, { x: fluid(20), opacity: 0.9,  ease:'ease-in', duration:3},1)
.fromTo('.lineDesign .lineImg .a', { x: fluid(-500), opacity:0 }, { x:0, opacity: 1,  ease:'none', duration:5},0)
.fromTo('.lineDesign .lineImg .b', { x: fluid(-500), opacity:0 }, { x:0, opacity: 1,  ease:'none', duration:5},0)
.fromTo('.lineDesign .lineImg .c', { x: fluid(500), opacity:0 }, { x:0, opacity: 1,  ease:'none', duration:5},0)
.fromTo('.lineDesign .lineImg .d', { x: fluid(1000), opacity:0 }, { x:0, opacity: 1,  ease:'none', duration:5},0)



//.lineDesign
gsap.timeline({
    scrollTrigger:{
        trigger:'.lineDesign',
        start:'30% 80%',
        end: '60% 0%',
        scrub:1,
    }
})

.fromTo('.lineDesign .lineImg .e', { x: fluid(-500), opacity:0 }, { x:0, opacity: 1,  ease:'none', duration:5},0)
.fromTo('.lineDesign .lineImg .f', { x: fluid(-1000), opacity:0 }, { x:0, opacity: 1,  ease:'none', duration:5},0)
.fromTo('.lineDesign .lineImg .g', { x: fluid(500), opacity:0 }, { x:0, opacity: 1,  ease:'none', duration:5},0)
.fromTo('.lineDesign .lineImg .h', { x: fluid(1000), opacity:0 }, { x:0, opacity: 1,  ease:'none', duration:5},0)










// cloud
gsap.timeline({
    scrollTrigger:{
        trigger:'.lineDesign',
        start:'0% 100%',
        end: '100% 0%',
        scrub:3,
    }
})

.fromTo('.lineDesign .cloud .i', { y: fluid(1000)}, { y:0, ease:'none', duration:10},0)
.fromTo('.lineDesign .cloud .j',{ y: fluid(500)},  { y:0,   ease:'none', duration:10},0)

// about 숫자 겹침 모션
gsap.registerPlugin(ScrollTrigger);

$(function(){
    gsap.timeline({
        scrollTrigger:{
            trigger:'.numList',
            pin: true,
            start:'50% 50%',
            end:'100% 100%',
            scrub: 2,
        }
    })
    .to('.numList li:nth-child(1)',{x:'410rem', duration:5, ease:'none'},0.1)
    .to('.numList li:nth-child(2)',{x:'205rem', duration:5, ease:'none'},0.3)
    .to('.numList li:nth-child(3)',{x:'0rem', duration:5, ease:'none'},0.5)
});

// handBox
gsap.timeline({
    scrollTrigger:{
        trigger:'.handBox',
        start:'0% 80%',
        end: '10% 50%',
        scrub:1,
    }
})
.fromTo('.handBox .leftHand', { x: fluid(-300) }, { x: 0, ease: 'none', duration: 5 }, 0) // 왼손 애니메이션: x 좌표 -300에서 0으로 이동
.fromTo('.handBox .rightHand', { x: fluid(500) }, { x: 0, ease: 'none', duration: 5 }, 0.5); // 오른손 애니메이션: x 좌표 500에서 0으로 이동, 시작을 0.5초로 지연

gsap.registerPlugin(ScrollTrigger);
    
        $(function(){
            gsap.timeline({
                scrollTrigger:{
                    trigger:'.star',
                    pin: true,
                    start:'50% 50%',
                    end:'100% 100%',
                    scrub: 2,
                }
            })
            .to('.star li:nth-child(1)',{y:'-100rem', duration:5, ease:'none'},0)
            .to('.star li:nth-child(2)',{y:'100rem', duration:5, ease:'none'},0)
            .to('.star li:nth-child(3)',{y:'-100rem', duration:5, ease:'none'},0)
            .to('.star li:nth-child(4)',{y:'100rem', duration:5, ease:'none'},0)
            .to('.star li:nth-child(5)',{y:'-100rem', duration:5, ease:'none'},0)


    
});

// skills
gsap.timeline({
    scrollTrigger:{
        trigger:'.skills',
        start:'45% 50%',
        end: '10% 100%',
        scrub:1,
    }
})
.fromTo('.skills .top', {x: fluid(800)}, {x: 0, ease: 'none', duration: 1}, 0) // 왼손 애니메이션: x 좌표 -800에서 0으로 이동
.fromTo('.skills .bottom', {x: fluid(-800)}, {x: 0, ease: 'none', duration: 1}, 0); // 오른손 애니메이션: x 좌표 800에서 0으로 이동, 시작을 0.5초로 지연




// skills 
gsap.timeline({
    scrollTrigger:{
        trigger:'.skills',
        start:'0% 80%',
        end: '30% 80%',
        scrub:1,
        pin: true
    }
})
.fromTo('.skills .top', { x: fluid(-1000) }, { x: fluid(300), ease: 'none', duration: 5,}, 0) // paused 속성 추가하여 애니메이션 일시정지
.fromTo('.skills .bottom', { x: fluid(1000) }, { x: fluid(-300), ease: 'none', duration: 5,}, 0);  // paused 속성 추가하여 애니메이션 일시정지






// con02 · 360° 프로젝트 캐러셀 진입 모션
gsap.timeline({
    scrollTrigger:{
        trigger: '.con02',
        start:'0% 88%',
        end: '18% 58%',
        scrub:1,
    }
})
.fromTo('.con02 .title .a', {x:'-100%'},{x:'0%', ease:'none', duration:5},0)
.fromTo('.con02 .title .b', {x:'100%'},{x:'0%', ease:'none', duration:5},0)
.to('.wrap', {backgroundColor: '#000', color:'#fff', ease:'none', duration:5},0);

});


// strength
$(function(){
    const list = gsap.utils.toArray('.portfolio .list li');
    const listA = gsap.utils.toArray('.portfolio .list .a');
    const listB = gsap.utils.toArray('.portfolio .list .b');

    gsap.to(list, {
        xPercent : -100 * (list.length - 1),
        ease : "none",
        scrollTrigger: {
            trigger:'.portfolio',
            pin: true,
            scrub:1,
            start:'center center',
            end:'200%'
        }
    });


    gsap.to(listA, {
        y: fluid(-50),

        scrollTrigger:{
            trigger:'.portfolio',
            scrub:2,
            end:'100%'
        }
    })

    gsap.to(listB, {
        y: fluid(-150),

        scrollTrigger:{
            trigger:'.portfolio',
            scrub:2,
            end:'100%'
        }
    })

});



$(function(){
    gsap.timeline({
        scrollTrigger:{
            trigger: '.whitecloud',
            start:'0% 100%',
            end: '0% 20%',
            scrub:1,
        }
    })

    .fromTo('.whitecloud .cloud .aa' , {y:'0%'},{y:'-100%',  ease:'none', duration:3},0)
    .fromTo('.whitecloud .cloud .bb' , {y:'0%'},{y:'-100%',  ease:'none', duration:3},0)
    .fromTo('.whitecloud .cloud .cc' , {y:'0%'},{y:'-100%',  ease:'none', duration:3},0)
    
});

$(function(){
    gsap.timeline({
        scrollTrigger:{
            trigger: '.whitecloud .txtBox',
            start:'0% 100%',
            end: '0% 10%',
            scrub:1,
        }
    })  
  
    .fromTo('.whitecloud .txtBox .a' , {y:fluid(500)},{y:fluid(-400),  ease:'none', duration:4},0)
    .fromTo('.whitecloud .txtBox .b' , {y:fluid(500)},{y:fluid(-420),  ease:'none', duration:4},1)
    .fromTo('.whitecloud .txtBox .c' , {y:fluid(300)},{y:fluid(-450),  ease:'none', duration:4},2)

});

$(function(){
    gsap.timeline({
        scrollTrigger:{
            trigger: '.whitecloud .blackcloud',
            start:'0% 80%',
            end: '50% 40%',
            scrub:1,
        }
    })
    .fromTo('.whitecloud .blackcloud .cloud', {y:fluid(2000)},{y:fluid(-500), ease:'none', duration:1},0)
    .fromTo('.whitecloud .blackcloud .text', {y:fluid(2800)},{y:fluid(600),  ease:'none', duration:1},0)
});

$(function(){
    gsap.registerPlugin(ScrollTrigger);

    const card = gsap.utils.toArray('.whyme .card li');

    gsap.to(card, {
     xPercent: -100 * (card.length - 1),
     ease:'none',
     scrollTrigger: {
         trigger: '.whyme',
         pin: true,
         scrub: 1,
         start:'center center',
         end: '200%'
     }
  });
});
    
