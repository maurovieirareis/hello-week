export const config = {
    daysHighlight: null,
    daysSelected: null,
    defaultDate: null,
    disableDates: null,
    disableDaysOfWeek: null,
    disablePastDays: false,
    format: {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        timeZone: "UTC"
    },
    lang: "en",
    locked: false,
    maxDate: null,
    minDate: null,
    monthShort: false,
    multiplePick: false,
    nav: ["◀", "▶"],
    range: false,
    rtl: false,
    selector: ".hello-week",
    todayHighlight: true,
    weekShort: true,
    weekStart: 0,
    onLoad: () => {
        /** callback function */
    },
    onClear: () => {
        /** callback function */
    },
    onNavigation: () => {
        /** callback function */
    },
    onSelect: () => {
        /** callback function */
    }
};
