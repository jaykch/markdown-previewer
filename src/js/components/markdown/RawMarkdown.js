import React from "react"

export default class ConvertedMarkdown extends React.Component {
//dangerouslySetInnerHTML={{__html: this.props.text.split("\n").join("<br>")}}

    updateText(e){
        const text = e.target.value;
        this.props.changeText(text);
        console.log(text);
    }

    render() {
        return (
            <div>
                <textarea value={this.props.text} onChange={this.updateText.bind(this)} className="form-control" >

                </textarea>
            </div>
        )
    }
}