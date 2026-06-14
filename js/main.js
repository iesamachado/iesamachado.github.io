// Datos de los proyectos
const projects = [
    {
        id: 'maps3d',
        title: 'Maps3D',
        summary: 'Visualizador 3D de mapas con relieves basado en datos topográficos y renderizado en el navegador, con sistema de persistencia de sesiones.',
        image: 'assets/images/maps3d.png',
        classroomIntegration: false,
        link: 'https://iesamachado.github.io/geopuzzle',
        repo: 'https://github.com/iesamachado/geopuzzle',
        cardTags: ['Impresión 3D', 'Geografía'],
        extendedContent: `
            <div class="info-section">
                <h3 style="color: var(--accent-neon); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px;">🌍 Cursos Destinatarios</h3>
                <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">Geografía (ESO y Bachillerato), Tecnología</p>
            </div>
            <div class="info-section">
                <h3 style="color: var(--accent-neon); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px;">¿En qué consiste el proyecto?</h3>
                <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 1rem;">El propósito principal de Maps3D es ofrecer una herramienta web interactiva para <strong>diseñar e imprimir maquetas topográficas en relieve de cualquier parte del mundo</strong> empleando impresión 3D.</p>
                <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 1rem;">Como gran reto del curso, el proyecto se centra en <strong>crear un puzzle físico a gran escala en relieve de la comunidad autónoma de Andalucía</strong>. El alumnado utilizará la plataforma para sectorizar el mapa andaluz, generar los modelos tridimensionales exactos de las diferentes zonas topográficas y exportar los archivos STL listos para la impresora.</p>
                <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 1.5rem;">Para facilitar este trabajo colaborativo, se ha integrado un <strong>sistema de backend completo con SQLite</strong> que permite guardar el estado exacto de cada recorte topográfico (elevación, coordenadas, escala de la cama de impresión) y continuar el diseño en otra sesión sin tener que volver a calcular la topografía desde cero.</p>
            </div>
            <div class="info-section">
                <h3 style="color: var(--accent-neon); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px;">⚙️ Arquitectura Técnica</h3>
                <ul style="font-size: 1.1rem; color: var(--text-primary); line-height: 1.6; margin-left: 1.5rem; margin-bottom: 1.5rem;">
                    <li style="margin-bottom: 0.5rem;"><strong>Frontend:</strong> Generación de Heightmaps en vivo y UI para gestión de proyectos.</li>
                    <li style="margin-bottom: 0.5rem;"><strong>Backend de Persistencia:</strong> Base de datos SQLite que guarda coordenadas exactas, dimensiones de cama de impresión (mm), factor de altura Z y suavizado.</li>
                    <li><strong>Funcionalidad Destacada:</strong> El sistema puede regenerar piezas (STL) basándose en los parámetros guardados sin sobrecargar el servidor procesando la topografía de nuevo.</li>
                </ul>
            </div>`
    },
    {
        id: 'moon',
        title: 'Moon',
        summary: 'Juego educativo para entender el funcionamiento interno de una CPU mediante retos lógicos y código binario.',
        image: 'assets/images/moon.png',
        classroomIntegration: true,
        link: 'https://iesamachado.github.io/moon',
        repo: 'https://github.com/iesamachado/moon',
        cardTags: ['Pensamiento Computacional', 'Gamificación'],
        extendedContent: `
            <div class="info-section">
                <h3 style="color: var(--accent-neon); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px;">🌙 Cursos Destinatarios</h3>
                <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">Informática, Arquitectura de Computadores, Pensamiento Computacional</p>
            </div>
            <div class="info-section">
                <h3 style="color: var(--accent-neon); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px;">¿En qué consiste el proyecto?</h3>
                <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 1.5rem;">Moon es una adaptación gamificada online del juego de mesa homónimo. Está diseñado para que el alumnado entienda el funcionamiento interno de una CPU (Unidad Central de Procesamiento) enfrentándose a retos de lógica binaria a muy bajo nivel.</p>
            </div>
            <div class="info-section">
                <h3 style="color: var(--accent-neon); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px;">🎮 Dinámica de Juego</h3>
                <ul style="font-size: 1.1rem; color: var(--text-primary); line-height: 1.6; margin-left: 1.5rem; margin-bottom: 1.5rem;">
                    <li style="margin-bottom: 0.5rem;"><strong>Arquitectura Simulada:</strong> El jugador toma los mandos de una CPU virtual con registros de 4 bits (A, B, C, D).</li>
                    <li style="margin-bottom: 0.5rem;"><strong>El Reto:</strong> Manipular los registros usando operaciones ensamblador básicas (INC, DEC, NOT, MOV, AND, OR, XOR) para conseguir que el Registro A iguale un valor binario objetivo aleatorio.</li>
                    <li><strong>Panel Docente:</strong> Se integra con Firebase Auth y Firestore. Un panel exclusivo de administrador permite al profesorado hacer seguimiento de partidas jugadas, ganadas y la tasa de victoria del alumnado.</li>
                </ul>
            </div>`
    },
    {
        id: 'helados',
        title: 'H3L4D0S',
        summary: 'Juego interactivo de programación donde los estudiantes sirven helados a contrarreloj resolviendo retos de lógica y secuencias.',
        image: 'assets/images/helados.png',
        classroomIntegration: true,
        link: 'https://iesamachado.github.io/helados',
        repo: 'https://github.com/iesamachado/helados',
        cardTags: ['Pensamiento Computacional', 'Gamificación'],
        extendedContent: `
            <div class="info-section">
                <h3 style="color: var(--accent-neon); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px;">🍦 Cursos Destinatarios</h3>
                <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">Matemáticas (ESO), Informática, Pensamiento Computacional</p>
            </div>
            <div class="info-section">
                <h3 style="color: var(--accent-neon); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px;">¿En qué consiste el proyecto?</h3>
                <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 1.5rem;">H3L4D0S es un juego interactivo de programación disfrazado de un simulador arcade de gestión de helados. El objetivo es servir pedidos a contrarreloj resolviendo secuencias de lógica algorítmica.</p>
            </div>
            <div class="info-section">
                <h3 style="color: var(--accent-neon); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px;">🕹️ Funcionalidades Clave</h3>
                <ul style="font-size: 1.1rem; color: var(--text-primary); line-height: 1.6; margin-left: 1.5rem; margin-bottom: 1.5rem;">
                    <li style="margin-bottom: 0.5rem;"><strong>Centro de Control:</strong> Un entorno con perfil de Alumnado y Docente usando inicio de sesión OAuth con Google.</li>
                    <li style="margin-bottom: 0.5rem;"><strong>Mis Clases:</strong> Los docentes pueden generar grupos, permitiendo al alumnado unirse y enviar sus puntuaciones de juego de manera centralizada a una base de datos en tiempo real (Firebase Firestore).</li>
                    <li><strong>Registro de Partidas:</strong> Seguimiento meticuloso del desempeño de cada estudiante y de su progreso resolviendo problemas secuenciales.</li>
                </ul>
            </div>`
    },
    {
        id: 'giomAI',
        title: 'GiomAI',
        summary: 'Infraestructura de Inteligencia Artificial Distribuida, escalable y 100% segura para el entorno educativo.',
        image: 'assets/images/giomAi.png',
        classroomIntegration: false,
        inProgress: true,
        link: 'https://iesamachado.github.io/giomAI',
        repo: 'https://github.com/iesamachado/giomAI',
        cardTags: ['Inteligencia Artificial', 'En Desarrollo'],
        extendedContent: `
            <div class="info-section">
                <h3 style="color: var(--accent-neon); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px;">🧠 Cursos Destinatarios</h3>
                <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">Sistemas Microinformáticos y Redes, ASIR, Tecnología e IA</p>
            </div>
            <div class="info-section">
                <h3 style="color: var(--accent-neon); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px;">¿En qué consiste el proyecto?</h3>
                <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 1.5rem;">GiomAI es una infraestructura completa de Inteligencia Artificial Distribuida de alta disponibilidad. Ha sido construida para proveer de IA generativa (Llama 3.2) al instituto garantizando 100% de privacidad, aislamiento y sin depender de servicios cloud comerciales de pago.</p>
            </div>
            <div class="info-section">
                <h3 style="color: var(--accent-neon); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px;">🛠️ Topología y Hardware</h3>
                <ul style="font-size: 1.1rem; color: var(--text-primary); line-height: 1.6; margin-left: 1.5rem; margin-bottom: 1.5rem;">
                    <li style="margin-bottom: 0.5rem;"><strong>Servidor Host:</strong> Un Dell PowerEdge R740xd virtualizado con Proxmox que aloja la máquina "Cerebro", un túnel seguro Zrok y un frontal web Open-WebUI.</li>
                    <li style="margin-bottom: 0.5rem;"><strong>El Foso (Red Aislada):</strong> Los motores de IA (Ollama) operan en una granja de MiniPCs económicos ubicados en una VLAN cerrada sin acceso a internet exterior.</li>
                    <li><strong>Balanceador de Carga:</strong> Un nodo Nginx con algoritmo \`least_conn\` distribuye el tráfico equitativamente entre los MiniPCs disponibles. Es escalable en caliente; se pueden añadir MiniPCs al instante si se requiere más potencia.</li>
                </ul>
            </div>`
    },
    {
        id: 'aprendersql',
        title: 'Aprender SQL (Master)',
        summary: 'Plataforma interactiva para dominar bases de datos MariaDB/MySQL mediante tutoriales y ejercicios inmersivos.',
        image: 'assets/images/aprenderSQL.png',
        classroomIntegration: false,
        link: 'https://iesamachado.github.io/aprendersql',
        repo: 'https://github.com/iesamachado/aprendersql',
        cardTags: ['Bases de Datos', 'Pensamiento Computacional'],
        extendedContent: `
            <div class="info-section">
                <h3 style="color: var(--accent-neon); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px;">🗄️ Cursos Destinatarios</h3>
                <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">Informática, Formación Profesional (ASIR / DAW / DAM)</p>
            </div>
            <div class="info-section">
                <h3 style="color: var(--accent-neon); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px;">¿En qué consiste el proyecto?</h3>
                <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 1.5rem;">Aprender SQL (Master) es un portal interactivo de aprendizaje inmersivo enfocado en motores relacionales MariaDB/MySQL. En lugar de usar teoría abstracta, se apoya en bases de datos reales descargables como "Arepazo" (Gestión de Restaurante), "Fifa26" o "NBA" (Estadísticas Deportivas).</p>
            </div>
            <div class="info-section">
                <h3 style="color: var(--accent-neon); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px;">📘 Temario y Ejercicios</h3>
                <ul style="font-size: 1.1rem; color: var(--text-primary); line-height: 1.6; margin-left: 1.5rem; margin-bottom: 1.5rem;">
                    <li style="margin-bottom: 0.5rem;"><strong>DDL (Creación de Estructuras):</strong> Tablas, claves primarias compuestas, validaciones de integridad referencial (Check) y asignación de Foráneas.</li>
                    <li style="margin-bottom: 0.5rem;"><strong>DML (Consultas Complejas):</strong> De simples SELECT a Group By, funciones de agregación, uniones jerárquicas (Joins) y subconsultas.</li>
                    <li><strong>Modificación y Seguridad:</strong> Ejemplos reales de cómo borrar datos para cumplir normativas de privacidad (GDPR), updates en cascada y transacciones atómicas.</li>
                </ul>
            </div>`
    },
    {
        id: 'mecanoclass',
        title: 'MecanoClass',
        summary: 'Plataforma web de mecanografía con modo competición en vivo (estilo Kahoot) y seguimiento de precisión.',
        image: 'assets/images/MecanoClass.png',
        classroomIntegration: true,
        link: 'https://iesamachado.github.io/MecanoClass',
        repo: 'https://github.com/iesamachado/MecanoClass',
        cardTags: ['TIC', 'Gamificación'],
        extendedContent: `
            <div class="info-section">
                <h3 style="color: var(--accent-neon); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px;">⌨️ Cursos Destinatarios</h3>
                <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">Todos los niveles (Primaria y ESO), Digitalización</p>
            </div>
            <div class="info-section">
                <h3 style="color: var(--accent-neon); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px;">¿En qué consiste el proyecto?</h3>
                <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 1.5rem;">MecanoClass moderniza la enseñanza de la mecanografía clásica transformándola en una plataforma web de estética premium y competiciones en vivo al estilo Kahoot.</p>
            </div>
            <div class="info-section">
                <h3 style="color: var(--accent-neon); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px;">🚀 Competición e Integración</h3>
                <ul style="font-size: 1.1rem; color: var(--text-primary); line-height: 1.6; margin-left: 1.5rem; margin-bottom: 1.5rem;">
                    <li style="margin-bottom: 0.5rem;"><strong>Modo Live Host:</strong> El docente inicia un dictado en directo. Los estudiantes introducen el código PIN para unirse a la sala.</li>
                    <li style="margin-bottom: 0.5rem;"><strong>Estadísticas en Tiempo Real:</strong> A medida que el alumnado teclea, se calcula la precisión, errores y la métrica crítica de Pulsaciones Por Minuto (PPM), proyectando el ranking interactivo en la pizarra.</li>
                    <li><strong>Tecnología:</strong> Desarrollado en JS Vanilla, usando Google Firebase (Auth + Firestore) para persistencia y seguridad, y avatares aleatorios de DiceBear.</li>
                </ul>
            </div>`
    }
];

// Elementos del DOM
const portfolioGrid = document.getElementById('portfolio-grid');
const projectView = document.getElementById('project-view');
const filtersContainer = document.getElementById('filters-container');
const btnBack = document.getElementById('btn-back');
const cursorGlow = document.getElementById('cursor-glow');

// Elementos de la Vista de Proyecto para inyectar datos
const projectImage = document.getElementById('project-image');
const projectTitle = document.getElementById('project-title');
const projectSummary = document.getElementById('project-summary');
const projectTags = document.getElementById('project-tags');
const projectExtendedContent = document.getElementById('project-extended-content');
const projectLink = document.getElementById('project-link');
const projectRepo = document.getElementById('project-repo');

// Establecer año actual
document.getElementById('current-year').textContent = new Date().getFullYear();

// Efecto Cursor Glow
document.addEventListener('mousemove', (e) => {
    if (cursorGlow) {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    }
});

// Función para renderizar los filtros
function renderFilters(currentFilter = 'TODOS') {
    if (!filtersContainer) return;
    
    // Obtener etiquetas únicas
    const allTags = new Set();
    projects.forEach(p => {
        if (p.cardTags) {
            p.cardTags.forEach(t => allTags.add(t));
        }
    });
    
    const uniqueTags = ['TODOS', ...Array.from(allTags).sort()];
    
    filtersContainer.innerHTML = '';
    uniqueTags.forEach(tag => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        if (tag === currentFilter) btn.classList.add('active');
        btn.textContent = tag;
        
        btn.addEventListener('click', () => {
            renderFilters(tag);
            renderProjects(tag);
        });
        
        filtersContainer.appendChild(btn);
    });
}

// Función para renderizar las tarjetas (Bento Grid)
function renderProjects(filterTag = 'TODOS') {
    portfolioGrid.innerHTML = '';

    const filteredProjects = filterTag === 'TODOS' 
        ? projects 
        : projects.filter(p => p.cardTags && p.cardTags.includes(filterTag));

    filteredProjects.forEach((project, index) => {
        const card = document.createElement('div');
        
        // Usar tamaño uniforme para todos los proyectos
        card.className = 'bento-card';
        card.dataset.id = project.id;

        const tagsHtml = project.cardTags ? project.cardTags.map(tag => `<span class="card-tag">${tag}</span>`).join('') : '';
        const inProgressBadge = project.inProgress 
            ? `<div style="position: absolute; top: 1rem; right: 1rem; background: #ffaa00; color: #000; padding: 0.3rem 0.8rem; border-radius: 50px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; z-index: 5; box-shadow: 0 4px 10px rgba(255, 170, 0, 0.4);">En Desarrollo</div>`
            : '';

        card.innerHTML = `
            ${inProgressBadge}
            <div class="image-container" ${project.inProgress ? 'style="filter: grayscale(60%) sepia(20%);"' : ''}>
                <img src="${project.image}" alt="${project.title}" class="bento-card-image" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22 viewBox=%220 0 400 300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%23111%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%2224px%22 fill=%22%23444%22%3ENo Image%3C/text%3E%3C/svg%3E';">
            </div>
            <div class="bento-card-content">
                <h3 class="bento-card-title">${project.title}</h3>
                <div class="card-tags-container">${tagsHtml}</div>
            </div>
        `;

        card.addEventListener('click', () => {
            history.pushState(null, '', '?project=' + project.id);
            showProjectView(project);
        });
        portfolioGrid.appendChild(card);
    });
}

// Funciones de Enrutamiento y Vistas
function showProjectView(project) {
    if (!project) return;
    
    // Rellenar datos
    projectImage.src = project.image;
    projectImage.onerror = function() {
        this.onerror=null; 
        this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22600%22 viewBox=%220 0 800 600%22%3E%3Crect width=%22800%22 height=%22600%22 fill=%22%23111%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%2232px%22 fill=%22%23444%22%3EImagen no disponible%3C/text%3E%3C/svg%3E';
    };
    
    projectTitle.textContent = project.title;
    projectSummary.textContent = project.summary;
    projectExtendedContent.innerHTML = project.extendedContent;
    
    if (project.inProgress) {
        projectExtendedContent.innerHTML = `
            <div class="info-section" style="margin-bottom: 2.5rem; padding: 1.5rem; background: rgba(255, 170, 0, 0.05); border-left: 4px solid #ffaa00; border-radius: 0 8px 8px 0;">
                <h3 style="color: #ffaa00; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px;">⚠️ Proyecto en Desarrollo</h3>
                <p style="font-size: 1.1rem; line-height: 1.6; color: var(--text-primary); margin: 0;">Este proyecto aún se encuentra en <strong>fase de construcción e implementación</strong> técnica. Las funcionalidades, la documentación y los recursos compartidos pueden estar incompletos o sujetos a cambios importantes en cualquier momento.</p>
            </div>
        ` + projectExtendedContent.innerHTML;
    }
    
    // Añadir bloque de explicación de Classroom dinámicamente si tiene integración
    if (project.classroomIntegration) {
        projectExtendedContent.innerHTML += `
            <div class="info-section" style="margin-top: 2.5rem; padding: 1.5rem; background: rgba(204, 255, 0, 0.05); border-left: 4px solid var(--accent-neon); border-radius: 0 8px 8px 0;">
                <h3 style="color: var(--accent-neon); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 2px;">🎓 Integración con Google Classroom</h3>
                <p style="font-size: 1.1rem; line-height: 1.6; color: var(--text-primary); margin: 0;">Este proyecto cuenta con soporte nativo para <strong>Google Classroom</strong>. Los docentes pueden <strong>importar sus clases</strong> enteras, <strong>crear tareas</strong> personalizadas y el sistema se encargará de <strong>autoevaluarlas</strong> sincronizando las calificaciones directamente con el cuaderno docente.</p>
            </div>
        `;
    }
    
    projectLink.href = project.link;
    projectRepo.href = project.repo;

    // Generar tags
    projectTags.innerHTML = '';
    
    const classroomTag = document.createElement('span');
    classroomTag.className = project.classroomIntegration ? 'tag integration-yes' : 'tag integration-no';
    classroomTag.textContent = project.classroomIntegration ? 'Classroom: SÍ' : 'Classroom: NO';
    projectTags.appendChild(classroomTag);

    if (project.cardTags) {
        project.cardTags.forEach(tag => {
            const t = document.createElement('span');
            t.className = 'tag';
            t.style.background = 'rgba(255,255,255,0.1)';
            t.textContent = tag;
            projectTags.appendChild(t);
        });
    }

    // Cambiar vista
    portfolioGrid.style.display = 'none';
    projectView.style.display = 'flex';
    window.scrollTo(0, 0);
}

function showHomeView() {
    projectView.style.display = 'none';
    portfolioGrid.style.display = 'grid'; // .bento-grid usa grid
}

function handleRoute() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');
    
    if (projectId) {
        const project = projects.find(p => p.id === projectId);
        if (project) {
            showProjectView(project);
        } else {
            // Si el ID no existe, vuelve a la home
            history.replaceState(null, '', window.location.pathname);
            showHomeView();
        }
    } else {
        showHomeView();
    }
}

// Event Listeners
btnBack.addEventListener('click', () => {
    history.pushState(null, '', window.location.pathname);
    showHomeView();
});

window.addEventListener('popstate', handleRoute);

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderFilters();
    renderProjects();
    handleRoute();
});
