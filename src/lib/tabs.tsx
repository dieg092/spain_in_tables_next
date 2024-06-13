import {
    Book,
    Euro,
    Users,
    Hospital,
    UserPlus,
    CloudSun,
    Siren,
    Scale,
    Globe,
    Cpu,
    Home,
    PieChart
} from 'lucide-react'

export const TABS = [
    {
        title: 'Inmigración',
        description:
            'El análisis de los datos de inmigración es fundamental para obtener una comprensión precisa y completa de la realidad socioeconómica y demográfica de un país.',
        url: 'inmigracion',
        icon: <UserPlus />
    },
    { title: 'Economía', description: '', url: 'economia', icon: <Euro /> },
    {
        title: 'Salud Pública',
        description: '',
        url: 'salud-publica',
        icon: <Hospital />
    },
    {
        title: 'Derechos Civiles',
        description: '',
        url: 'derechos-civiles',
        icon: <Users />
    },
    {
        title: 'Cambio Climático',
        description: '',
        url: 'cambio-climatico',
        icon: <CloudSun />
    },
    { title: 'Educación', description: '', url: 'educacion', icon: <Book /> },
    { title: 'Seguridad', description: '', url: 'seguridad', icon: <Siren /> },
    { title: 'Justicia', description: '', url: 'justicia', icon: <Scale /> },
    {
        title: 'Política Exterior',
        description: '',
        url: 'politica-exterior',
        icon: <Globe />
    },
    { title: 'Tecnología', description: '', url: 'tecnologia', icon: <Cpu /> },
    { title: 'Vivienda', description: '', url: 'vivienda', icon: <Home /> },
    {
        title: 'Democracia',
        description: '',
        url: 'democracia',
        icon: <PieChart />
    }
]
