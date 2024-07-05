import React, {Suspense, useEffect, useState, startTransition} from 'react';

const WebDeveloper = React.lazy(() => import('@/pages/Resume/components/skills/WebDeveloper'));
const Database = React.lazy(() => import('@/pages/Resume/components/skills/Database'));
const Devops = React.lazy(() => import('@/pages/Resume/components/skills/Devops'));
const Frontend = React.lazy(() => import('@/pages/Resume/components/skills/Frontend'));
const Backend = React.lazy(() => import('@/pages/Resume/components/skills/Backend'));

interface KnowledgeContentProps {
    knowledge: string;
}

const componentMap: { [key: string]: React.LazyExoticComponent<React.FC> } = {
    'web-development': WebDeveloper,
    'database': Database,
    'devops': Devops,
    'frontend': Frontend,
    'backend': Backend,
};

const KnowledgeContent: React.FC<KnowledgeContentProps> = ({knowledge}) => {

    const [Component, setComponent] = useState<React.LazyExoticComponent<React.FC> | null>(null);

    useEffect(() => {
        startTransition(() => {
            setComponent(componentMap[knowledge] || null);
        });
    }, [knowledge]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {Component ? (
                <Component/>
            ) : (
                <div>Component not found</div>
            )}
        </Suspense>
    );
}

export default KnowledgeContent;
