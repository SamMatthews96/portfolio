type Activity = {
    name: string;
    startDate: { year: number; month: number };
    endDate?: { year: number; month: number };
    type: string;
}

export type { Activity };
