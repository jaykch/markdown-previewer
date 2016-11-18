import React from "react"

export default class ConvertedMarkdown extends React.Component {

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.props.text.split("\n").join("<br>")}}>
            </div>
        )
    }
}