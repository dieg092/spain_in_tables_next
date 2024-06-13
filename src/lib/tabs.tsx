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
    { title: 'Economía', url: 'economia', icon: <Euro /> },
    { title: 'Salud Pública', url: 'salud-publica', icon: <Hospital /> },
    { title: 'Derechos Civiles', url: 'derechos-civiles', icon: <Users /> },
    { title: 'Cambio Climático', url: 'cambio-climatico', icon: <CloudSun /> },
    { title: 'Educación', url: 'educacion', icon: <Book /> },
    { title: 'Seguridad', url: 'seguridad', icon: <Siren /> },
    { title: 'Justicia', url: 'justicia', icon: <Scale /> },
    { title: 'Política Exterior', url: 'politica-exterior', icon: <Globe /> },
    { title: 'Tecnología', url: 'tecnologia', icon: <Cpu /> },
    { title: 'Vivienda', url: 'vivienda', icon: <Home /> },
    { title: 'Democracia', url: 'democracia', icon: <PieChart /> }
]
