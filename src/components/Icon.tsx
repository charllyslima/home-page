import React, {Suspense, lazy} from 'react';

interface IconProps {
    iconName: string;
    color: string;
}

type IconLibraryModule = {
    [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const iconLibraries: { [key: string]: () => Promise<IconLibraryModule> } = {
    fa: () => import('react-icons/fa') as unknown as Promise<IconLibraryModule>,
    md: () => import('react-icons/md') as unknown as Promise<IconLibraryModule>,
    ai: () => import('react-icons/ai') as unknown as Promise<IconLibraryModule>,
    io: () => import('react-icons/io') as unknown as Promise<IconLibraryModule>,
    hi: () => import('react-icons/hi') as unknown as Promise<IconLibraryModule>,
    lu: () => import('react-icons/lu') as unknown as Promise<IconLibraryModule>,
    pi: () => import('react-icons/pi') as unknown as Promise<IconLibraryModule>,
    si: () => import('react-icons/si') as unknown as Promise<IconLibraryModule>,
    gi: () => import('react-icons/gi') as unknown as Promise<IconLibraryModule>,
    gr: () => import('react-icons/gr') as unknown as Promise<IconLibraryModule>,
};

const loadIcon = async (iconName: string): Promise<{ default: React.ComponentType<React.SVGProps<SVGSVGElement>> }> => {
    const prefix = iconName.slice(0, 2).toLowerCase();
    const loadLibrary = iconLibraries[prefix];

    if (!loadLibrary) {
        throw new Error(`Icon library for prefix "${prefix}" not found`);
    }

    const library = await loadLibrary();
    const IconComponent = library[iconName as keyof typeof library];
    if (!IconComponent) {
        throw new Error(`Icon "${iconName}" not found in library`);
    }
    return {default: IconComponent};
};

const IconLoader: React.FC<IconProps> = ({iconName, color}) => {
    const IconComponent = lazy(() => loadIcon(iconName));

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <IconComponent className={`me-3 w-[40px] h-[40px]`} style={{color: color}}/>
        </Suspense>
    );
};

export default IconLoader;
