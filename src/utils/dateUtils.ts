export function getRandomISODate(): string {
    const startDate = new Date("2000-01-01");
    const endDate = new Date("2023-10-18");

    const startTime = startDate.getTime();
    const endTime = endDate.getTime();
    const randomTime = startTime + Math.random() * (endTime - startTime);

    const randomDate = new Date(randomTime);
    return randomDate.toISOString().split("T")[0];
}

export function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export function getRandomStyle() {
    const styles = ["italic", "bold", "underline", "normal"];
    return styles[Math.floor(Math.random() * styles.length)];
};