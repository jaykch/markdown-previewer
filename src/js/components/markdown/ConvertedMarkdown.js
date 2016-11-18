import Marked from "marked"
import React from "react"

Marked.setOptions({
    renderer: new Marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});

export default class ConvertedMarkdown extends React.Component {

    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: Marked(this.props.textToConvert)}}>
            </div>
        )
    }
}