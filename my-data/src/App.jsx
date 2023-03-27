import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// library.add(fas);
import { socialIcons, product } from "./data";

const App = () => {
    return (
        <div>
            <h2> I am from App </h2>
            {/* <FontAwesomeIcon icon={["fab", "apple"]} /> */}

            <div>
                {/* {socialIcons.map((item) => {
                    <div key={item.id}>
                        <FontAwesomeIcon icon={["fab", item.icon]} />
                        <span>{item.tooltip}</span>
                    </div>;
                })} */}
            </div>

            <h3> Bread Crumb </h3>
            <div className="breadcrumbs">
                {product.breadcrumbs.map((item, index) => (
                    <React.Fragment key={index}>
                        <a
                            href={item.link}
                            style={{
                                display: "inline-block",
                            }}
                        >
                            {item.text}
                        </a>
                        {index < product.breadcrumbs.length - 1 && (
                            <span>{" / "} </span>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default App;
