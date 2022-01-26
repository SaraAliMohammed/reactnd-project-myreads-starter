import React, { Component } from "react";

const shelfOptions = [
    {
        label: "Move to...",
        value: "move",
    },
    {
        label: "Currently Reading",
        value: "currentlyReading",
    },
    {
        label: "Want to Read",
        value: "wantToRead",
    },
    {
        label: "Read",
        value: "read",
    },
    {
        label: "None",
        value: "none",
    }
];

class BookShelfChanger extends Component {
    updateBookShelf = (evt) => this.props.updateBookShelf(this.props.book, evt.target.value);
    render() {
        const { book } = this.props;
        return (
            <div className="book-shelf-changer">
                <select defaultValue={book.shelf} onChange={this.updateBookShelf}>
                    {shelfOptions.map((option) => (
                        option.value === "move" ? <option key={option.value} value={option.value} disabled>{option.label}</option> :
                            <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        )
    }
}
export default BookShelfChanger;