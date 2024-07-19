export enum Technologies {
    PHP = 'PHP',
    JS_TS = 'JavaScript & TypeScript',
    DATABASE = 'DataBase',
    CSHARP = 'C#',
    PYTHON = 'Python',
    GIT = 'Git',
    CI_CD = 'CI/CD',
    DOCKER = 'Docker',
    FLUTTER = 'Flutter',
    JAVA = 'Java',
    CSS = 'CSS',
    BUILD_TOOLS = 'Build Tools'
}

interface Skills {
    title: string
    years: number
    sub_item: {
        title: string
        years: number
    }[]
}

export const comboSkill: { [key in Technologies]: Skills } = {
    [Technologies.PHP]: {
        title: Technologies.PHP,
        years: 8,
        sub_item: [
            {
                title: "Laravel",
                years: 2.1,
            },
            {
                title: "Zend",
                years: 2.1,
            },
            {
                title: "Yii2",
                years: 2.6,
            }
        ]
    },
    [Technologies.JS_TS]: {
        title: Technologies.JS_TS,
        years: 8,
        sub_item: [
            {
                title: "Angular",
                years: 1.5
            },
            {
                title: "React",
                years: 2.1
            },
            {
                title: "Next.JS",
                years: 2.1
            },
            {
                title: "Vue.js",
                years: 2.1
            },
            {
                title: "jQuery",
                years: 5.4
            }
        ]
    },
    [Technologies.DATABASE]: {
        title: Technologies.DATABASE,
        years: 8,
        sub_item: [
            {
                title: "MySQL",
                years: 2
            },
            {
                title: "SQL Server",
                years: 2
            },
            {
                title: "SQLite",
                years: 2
            },
            {
                title: "PostgresSQL",
                years: 2
            },
            {
                title: "Redis",
                years: 2
            }
        ]
    },
    [Technologies.CSHARP]: {
        title: Technologies.CSHARP,
        years: 2,
        sub_item: [
            {
                title: ".Net Framework",
                years: 2
            },
        ]
    },
    [Technologies.PYTHON]: {
        title: Technologies.PYTHON,
        years: 2,
        sub_item: [
            {
                title: "Selenium",
                years: 2
            },
            {
                title: "Beautiful Soup",
                years: 2
            },
            {
                title: "Jupyter Notebook",
                years: 2
            },
        ]
    },
    [Technologies.GIT]: {
        title: Technologies.GIT,
        years: 2,
        sub_item: [
            {
                title: "GitHub",
                years: 2
            },
            {
                title: "GitLab",
                years: 2
            },
            {
                title: "Tortoise SVN",
                years: 2
            },
            {
                title: "BitBucket",
                years: 2
            },
        ]
    },
    [Technologies.CI_CD]: {
        title: Technologies.CI_CD,
        years: 2,
        sub_item: []
    },
    [Technologies.DOCKER]: {
        title: Technologies.DOCKER,
        years: 2,
        sub_item: []
    },
    [Technologies.JAVA]: {
        title: Technologies.JAVA,
        years: 2,
        sub_item: []
    },
    [Technologies.FLUTTER]: {
        title: Technologies.FLUTTER,
        years: 1,
        sub_item: []
    },
    [Technologies.CSS]: {
        title: Technologies.CSS,
        years: 1,
        sub_item: [
            {
                title: "Bootstrap 3/4/5",
                years: 5
            },
            {
                title: "Tailwind",
                years: 2
            },
            {
                title: "SASS",
                years: 5
            },
        ]
    },
    [Technologies.BUILD_TOOLS]: {
        title: Technologies.BUILD_TOOLS,
        years: 1,
        sub_item: [
            {
                title: "Vite",
                years: 5
            },
            {
                title: "WebPack",
                years: 2
            },
        ]
    },
};


