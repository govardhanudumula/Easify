import * as React from "react";
import { Rings } from 'react-loader-spinner';


export class LoaderComponent extends React.Component {



    render() {
        return (

            <div>
                <Rings
  visible={true}
                    height="40"
                    width="40"
                    color="#4fa94d"
                    ariaLabel="rings-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        )
    }
}

export default LoaderComponent