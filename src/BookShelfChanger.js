import React from "react";

function BookShelfChanger(props) {
    const { book, updateBookShelf } = props;
    const shelfOptions = [
        { label: "Move to...", value: "move" },
        { label: "Currently Reading", value: "currentlyReading" },
        { label: "Want to Read", value: "wantToRead" },
        { label: "Read", value: "read" },
        { label: "None", value: "none" }
    ];

    return (
        <div className="book-shelf-changer">
            <select defaultValue={book.shelf} onChange={(event) => updateBookShelf(book, event.target.value)}>
                {shelfOptions.map((option) => (
                    option.value === "move" ? <option key={option.value} value={option.value} disabled>{option.label}</option> :
                        <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}
export default BookShelfChanger;