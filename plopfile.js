import pluralize from 'pluralize';

export default function (plop) {
    // snakecase pluralize
    plop.setHelper('slugCase', (text) => {
        // to snake case
        let words = text.replace(/([A-Z])/g, ' $1').split(' ');
        words = words.map((word) => word.toLowerCase()).join('-');
        return pluralize(words);
    });
    // helper for getting last part of path and make it pascal case
    plop.setHelper('lastPartPascalCase', (text) => {
        const words = text.split('/');
        return words[words.length - 1].replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    });
    // helper for getting last part of path and make it snake case
    plop.setHelper('lastPartSnakeCase', (text) => {
        const words = text.split('/');
        return words[words.length - 1].replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toLowerCase())));
    });
    //helper for last part of path and make it snake case and plural
    plop.setHelper('lastPartSnakeCasePlural', (text) => {
        const words = text.split('/');
        const newText = words[words.length - 1].replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toLowerCase())));
        return pluralize(newText);
    });
    //helper for last part of path and make it camel case and plural
    plop.setHelper('lastPartCamelCasePlural', (text) => {
        const words = text.split('/');
        const newText = words[words.length - 1].replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toLowerCase())));
        return pluralize(newText);
    });
    //helper for last part of path and make it pascal case and plural
    plop.setHelper('lastPartPascalCasePlural', (text) => {
        const words = text.split('/');
        const newText = words[words.length - 1].replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
        return pluralize(newText);
    });
    // helper for last part of path and make it snake case with path /
    plop.setHelper('lastPartSnakeCaseWithPath', (text) => {
        const words = text.split('/');
        return words[words.length - 1].replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toLowerCase())));
    });
    // helper for last part of path and make it pascal case with path /
    plop.setHelper('lastPartPascalCaseWithPath', (text) => {
        const words = text.split('/');
        return words[words.length - 1].replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    });
    // helper for last part of path and make it camel case with path /
    plop.setHelper('lastPartCamelCaseWithPath', (text) => {
        const words = text.split('/');
        return words[words.length - 1].replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toLowerCase())));
    });

    // component generator
    plop.setGenerator('make:components', {
        description: 'Create component files',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your component name?',
            }
        ],
        actions: [
            {
                type: 'addMany',
                destination: `${process.cwd()}/src/components/{{lastPartSnakeCasePlural name}}`,
                templateFiles: 'plop-templates/components/*',
                base: 'plop-templates/components/',
            }
        ]
    });

    // page generator
    plop.setGenerator('make:page', {
        description: 'Create page files',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your page name?',
            }
        ],
        actions: [
            {
                type: 'addMany',
                destination: `${process.cwd()}/src/pages/{{ lastPartSnakeCasePlural name}}`,
                templateFiles: 'plop-templates/pages/*',
                base: 'plop-templates/pages/',
            }
        ]
    });

    // store generator
    plop.setGenerator('make:store', {
        description: 'Create store files',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your store name?',
            }
        ],
        actions: [
            {
                type: 'addMany',
                destination: `${process.cwd()}/src/stores`,
                templateFiles: 'plop-templates/store/*',
                base: 'plop-templates/store/',
            }
        ]
    });

    // make curd
    plop.setGenerator('gen:curd', {
        description: 'Generate curd files',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your curd name?',
            },
        ],
        actions: [
            {
                type: 'addMany',
                destination: `${process.cwd()}/src/components/{{lastPartSnakeCasePlural name}}`,
                templateFiles: 'plop-templates/components/*',
                base: 'plop-templates/components/',
            },
            {
                type: 'addMany',
                destination: `${process.cwd()}/src/pages/{{ lastPartSnakeCasePlural name}}`,
                templateFiles: 'plop-templates/pages/*',
                base: 'plop-templates/pages/',
            },
            {
                type: 'addMany',
                destination: `${process.cwd()}/src/stores`,
                templateFiles: 'plop-templates/store/*',
                base: 'plop-templates/store/',
            }
        ]
    });

}
