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
        label: "Banana",
        value: "wantToRead",
    },
    {
        label: "Want to Read",
        value: "read",
    },
    {
        label: "None",
        value: "none",
    }
];

class BookShelfChanger extends Component {
    render() {
        const { shelf } = this.props;

        return (
            <div className="book-shelf-changer">
                <select defaultValue={shelf}>
                    {shelfOptions.map((option) => (
                        option.value==="move"?<option key={option.value} value={option.value} disabled>{option.label}</option>:
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        )
    }
}
export default BookShelfChanger;