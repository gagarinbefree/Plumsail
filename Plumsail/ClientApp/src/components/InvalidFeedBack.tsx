import * as React from "react";

export interface IInvalidFeedBack {
    text?: string
}

const InvalidFeedBack: React.SFC<IInvalidFeedBack> = (props: IInvalidFeedBack) =>
    props.text ? <div className="invalid-feedback">{props.text}</div> : null;

export default InvalidFeedBack;