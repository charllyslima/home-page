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
    console.log(color)
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <IconComponent className={`me-3 size-16 xl:size-10`} style={{color: color}}/>
        </Suspense>
    );
};

export default IconLoader;
