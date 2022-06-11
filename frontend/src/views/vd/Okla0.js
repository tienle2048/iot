import React from "react";


class Okla0 extends React.Component {

    deletejob = (item) => {
        console.log('okla0', item)
        this.props.func1(item)
    }

    render() {
        let okla = this.props.name;

        return (
            <div>
                {
                    okla.map((item, index) => {
                        return (
                            <h1 key={index}>{item.job}
                                <span
                                    onClick={() => { this.deletejob(item) }}
                                > x</span></h1>
                        )
                    })
                }
            </div>
        );
    }

}
export default Okla0;