export const dateFormatter = (date) => {
    return `${date.split("T")[0]} at ${date.split("T")[1].split(".")[0]}`;
}
