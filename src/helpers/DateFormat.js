function DateFormat(dateString) {
    const date = new Date(dateString);
    return date.toISOString().replace('T', ' ').replace(/\.\d+Z$/, '');
}

export default DateFormat