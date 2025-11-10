
interface Developer<T, X = null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        modal: string;
        releasedYear: number;
    };
    smartWatch: T;
    bike? : X;
};

interface nonBrandWatch {
    heartRate: string;
    stopWatch: boolean;
};

interface brandWatch {
    heartRate: string;
    stopWatch: boolean;
    callSupport: boolean;
    calculator: boolean;
    aiFeature: boolean;
}

const poorDeveloper: Developer<nonBrandWatch, {
    brand: 'Yamaha', engineCapacity: '200cc'
}> = {
    name: 'Mr. Poor',
    salary: 20000,
    device: {
        brand: 'MSI',
        modal: '21MSI00',
        releasedYear: 2021,
    },
    smartWatch: {
        heartRate: '120',
        stopWatch: true,
    },

};

const richDeveloper: Developer<brandWatch> = {
    name: 'Mr. Rich',
    salary: 100000,
    device: {
        brand: 'MAC',
        modal: '25MAC00',
        releasedYear: 2025,
    },
    smartWatch: {
        heartRate: '120',
        stopWatch: true,
        callSupport: true,
        calculator: true,
        aiFeature: true,
    },
    bike: null;

};