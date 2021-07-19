import {useState} from "react";
import {Link} from "react-router-dom";

function Skill() {
    // /services/data/v50.0/query/?q=SELECT+Id,+Name,+Type__c+FROM%20Skill__c
    const data = {
        "totalSize" : 23,
        "done" : true,
        "records" : [ {
            "attributes" : {
                "type" : "Skill__c",
                "url" : "/services/data/v50.0/sobjects/Skill__c/a0O2o00000z9SkREAU"
            },
            "Id" : "a0O2o00000z9SkREAU",
            "Name" : "Mac",
            "Type__c" : "Hardskill"
        }, {
            "attributes" : {
                "type" : "Skill__c",
                "url" : "/services/data/v50.0/sobjects/Skill__c/a0O2o00000z9SnGEAU"
            },
            "Id" : "a0O2o00000z9SnGEAU",
            "Name" : "Perseverance",
            "Type__c" : "Softskill"
        }, {
            "attributes" : {
                "type" : "Skill__c",
                "url" : "/services/data/v50.0/sobjects/Skill__c/a0O2o00000z9SbFEAU"
            },
            "Id" : "a0O2o00000z9SbFEAU",
            "Name" : "Bootstrap",
            "Type__c" : "Hardskill"
        }, {
            "attributes" : {
                "type" : "Skill__c",
                "url" : "/services/data/v50.0/sobjects/Skill__c/a0O2o00000z9SgyEAE"
            },
            "Id" : "a0O2o00000z9SgyEAE",
            "Name" : "Javascript",
            "Type__c" : "Hardskill"
        }, {
            "attributes" : {
                "type" : "Skill__c",
                "url" : "/services/data/v50.0/sobjects/Skill__c/a0O2o00000z9SgzEAE"
            },
            "Id" : "a0O2o00000z9SgzEAE",
            "Name" : "Lightning Component",
            "Type__c" : "Hardskill"
        }, {
            "attributes" : {
                "type" : "Skill__c",
                "url" : "/services/data/v50.0/sobjects/Skill__c/a0O2o00000z9Sh0EAE"
            },
            "Id" : "a0O2o00000z9Sh0EAE",
            "Name" : "LWC",
            "Type__c" : "Hardskill"
        }, {
            "attributes" : {
                "type" : "Skill__c",
                "url" : "/services/data/v50.0/sobjects/Skill__c/a0O2o00000z9Sh2EAE"
            },
            "Id" : "a0O2o00000z9Sh2EAE",
            "Name" : "Force de proposition",
            "Type__c" : "Softskill"
        }, {
            "attributes" : {
                "type" : "Skill__c",
                "url" : "/services/data/v50.0/sobjects/Skill__c/a0O2o00000z9SpcEAE"
            },
            "Id" : "a0O2o00000z9SpcEAE",
            "Name" : "Anglais : B1 Intermediaire",
            "Type__c" : "Language"
        }, {
            "attributes" : {
                "type" : "Skill__c",
                "url" : "/services/data/v50.0/sobjects/Skill__c/a0O2o00000z9SYuEAM"
            },
            "Id" : "a0O2o00000z9SYuEAM",
            "Name" : "Agile Scrum",
            "Type__c" : "Hardskill"
        }, {
            "attributes" : {
                "type" : "Skill__c",
                "url" : "/services/data/v50.0/sobjects/Skill__c/a0O2o00000z9SZxEAM"
            },
            "Id" : "a0O2o00000z9SZxEAM",
            "Name" : "React",
            "Type__c" : "Hardskill"
        }, {
            "attributes" : {
                "type" : "Skill__c",
                "url" : "/services/data/v50.0/sobjects/Skill__c/a0O2o00000z9ScmEAE"
            },
            "Id" : "a0O2o00000z9ScmEAE",
            "Name" : "Git",
            "Type__c" : "Hardskill"
        }, {
            "attributes" : {
                "type" : "Skill__c",
                "url" : "/services/data/v50.0/sobjects/Skill__c/a0O2o00000z9SQPEA2"
            },
            "Id" : "a0O2o00000z9SQPEA2",
            "Name" : "HTML5/CSS3",
            "Type__c" : "Hardskill"
        }, {
            "attributes" : {
                "type" : "Skill__c",
                "url" : "/services/data/v50.0/sobjects/Skill__c/a0O2o00000z9SQQEA2"
            },
            "Id" : "a0O2o00000z9SQQEA2",
            "Name" : "Java",
            "Type__c" : "Hardskill"
        }, {
            "attributes" : {
                "type" : "Skill__c",
                "url" : "/services/data/v50.0/sobjects/Skill__c/a0O2o00000z9SklEAE"
            },
            "Id" : "a0O2o00000z9SklEAE",
            "Name" : "Windows",
            "Type__c" : "Hardskill"
        }, {
            "attributes" : {
                "type" : "Skill__c",
                "url" : "/services/data/v50.0/sobjects/Skill__c/a0O2o00000z9SYvEAM"
            },
            "Id" : "a0O2o00000z9SYvEAM",
            "Name" : "Pédagogie",
            "Type__c" : "Softskill"
        }, {
            "attributes" : {
                "type" : "Skill__c",
                "url" : "/services/data/v50.0/sobjects/Skill__c/a0O2o00000z9SYwEAM"
            },
            "Id" : "a0O2o00000z9SYwEAM",
            "Name" : "Esprit d'analyse",
            "Type__c" : "Softskill"
        }, {
            "attributes" : {
                "type" : "Skill__c",
                "url" : "/services/data/v50.0/sobjects/Skill__c/a0O2o00000z9SkmEAE"
            },
            "Id" : "a0O2o00000z9SkmEAE",
            "Name" : "Rigueur",
            "Type__c" : "Softskill"
        }, {
            "attributes" : {
                "type" : "Skill__c",
                "url" : "/services/data/v50.0/sobjects/Skill__c/a0O2o00000z9SjEEAU"
            },
            "Id" : "a0O2o00000z9SjEEAU",
            "Name" : "APEX",
            "Type__c" : "Hardskill"
        }, {
            "attributes" : {
                "type" : "Skill__c",
                "url" : "/services/data/v50.0/sobjects/Skill__c/a0O2o00000z9SjFEAU"
            },
            "Id" : "a0O2o00000z9SjFEAU",
            "Name" : "Python",
            "Type__c" : "Hardskill"
        }, {
            "attributes" : {
                "type" : "Skill__c",
                "url" : "/services/data/v50.0/sobjects/Skill__c/a0O2o00000z9SjGEAU"
            },
            "Id" : "a0O2o00000z9SjGEAU",
            "Name" : "Ambition",
            "Type__c" : "Softskill"
        }, {
            "attributes" : {
                "type" : "Skill__c",
                "url" : "/services/data/v50.0/sobjects/Skill__c/a0O2o00000z9SY7EAM"
            },
            "Id" : "a0O2o00000z9SY7EAM",
            "Name" : "Prise de parole",
            "Type__c" : "Softskill"
        }, {
            "attributes" : {
                "type" : "Skill__c",
                "url" : "/services/data/v50.0/sobjects/Skill__c/a0O2o00000z9Sm8EAE"
            },
            "Id" : "a0O2o00000z9Sm8EAE",
            "Name" : "Dynamisme",
            "Type__c" : "Softskill"
        }, {
            "attributes" : {
                "type" : "Skill__c",
                "url" : "/services/data/v50.0/sobjects/Skill__c/a0O2o00000z9ROgEAM"
            },
            "Id" : "a0O2o00000z9ROgEAM",
            "Name" : "Linux",
            "Type__c" : "Hardskill"
        } ]
    };
    const [isLoading, setisLoading] = useState(false);

    const renderLoading = () => (
        <div>Loading</div>
    );
    const renderHeader = () => (
        <div className="slds-page-header">
            <div className="slds-page-header__row">
                <div className="slds-page-header__col-title">
                    <div className="slds-media">
                        <div className="slds-media__figure">
                            <span className="slds-icon_container slds-icon-standard-skill">
                                <svg className="slds-icon slds-page-header__icon" aria-hidden="true">
                                    <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#skill"></use>
                                </svg>
                            </span>
                        </div>
                        <div className="slds-media__body">
                            <div className="slds-page-header__name">
                                <div className="slds-page-header__name-title">
                                    <h1>
                                        <span>Competence</span>
                                        <span className="slds-page-header__title slds-truncate" title="Recently Viewed">Recently Viewed</span>
                                    </h1>
                                </div>
                                <div className="slds-page-header__name-switcher">
                                    <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                                        <button className="slds-button slds-button_icon slds-button_icon-small"
                                                aria-haspopup="true" title="Switch list view">
                                            <svg className="slds-button__icon slds-icon_x-small" aria-hidden="true">
                                                <use
                                                    xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                            </svg>
                                            <span className="slds-assistive-text">Switch list view</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slds-page-header__col-actions">
                    <div className="slds-page-header__controls">
                        <div className="slds-page-header__control">
                            <ul className="slds-button-group-list">
                                <li>
                                    <button className="slds-button slds-button_neutral" disabled="true">New</button>
                                </li>
                                <li>
                                    <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                                        <button className="slds-button slds-button_icon slds-button_icon-border-filled"
                                                aria-haspopup="true" title="More Actions" disabled="true">
                                            <svg className="slds-button__icon" aria-hidden="true">
                                                <use
                                                    xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                            </svg>
                                            <span className="slds-assistive-text">More Actions</span>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slds-page-header__row">
                <div className="slds-page-header__col-meta">
                    <p className="slds-page-header__meta-text">{data.totalSize} item{(data.totalSize > 1) ? "s" : ""} • Updated 13 minutes ago</p>
                </div>
                <div className="slds-page-header__col-controls">
                    <div className="slds-page-header__controls">
                        <div className="slds-page-header__control">
                            <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                                <button className="slds-button slds-button_icon slds-button_icon-more"
                                        aria-haspopup="true" title="List View Controls" disabled="true">
                                    <svg className="slds-button__icon" aria-hidden="true">
                                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#settings"></use>
                                    </svg>
                                    <svg className="slds-button__icon slds-button__icon_x-small" aria-hidden="true">
                                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                    </svg>
                                    <span className="slds-assistive-text">List View Controls</span>
                                </button>
                            </div>
                        </div>
                        <div className="slds-page-header__control">
                            <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                                <button className="slds-button slds-button_icon slds-button_icon-more"
                                        aria-haspopup="true" title="Change view" disabled="true">
                                    <svg className="slds-button__icon" aria-hidden="true">
                                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#table"></use>
                                    </svg>
                                    <svg className="slds-button__icon slds-button__icon_x-small" aria-hidden="true">
                                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                    </svg>
                                    <span className="slds-assistive-text">Change view</span>
                                </button>
                            </div>
                        </div>
                        <div className="slds-page-header__control">
                            <button className="slds-button slds-button_icon slds-button_icon-border-filled"
                                    title="Edit List" disabled="true">
                                <svg className="slds-button__icon" aria-hidden="true">
                                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                                </svg>
                                <span className="slds-assistive-text">Edit List</span>
                            </button>
                        </div>
                        <div className="slds-page-header__control">
                            <button className="slds-button slds-button_icon slds-button_icon-border-filled"
                                    title="Refresh List" disabled="true">
                                <svg className="slds-button__icon" aria-hidden="true">
                                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#refresh"></use>
                                </svg>
                                <span className="slds-assistive-text">Refresh List</span>
                            </button>
                        </div>
                        <div className="slds-page-header__control">
                            <ul className="slds-button-group-list">
                                <li>
                                    <button className="slds-button slds-button_icon slds-button_icon-border-filled"
                                            title="Charts" disabled="true">
                                        <svg className="slds-button__icon" aria-hidden="true">
                                            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chart"></use>
                                        </svg>
                                        <span className="slds-assistive-text">Charts</span>
                                    </button>
                                </li>
                                <li>
                                    <button className="slds-button slds-button_icon slds-button_icon-border-filled"
                                            title="Filters" disabled="true">
                                        <svg className="slds-button__icon" aria-hidden="true">
                                            <use
                                                xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#filterList"></use>
                                        </svg>
                                        <span className="slds-assistive-text">Filters</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    const renderBody = () => (
        <table className="slds-table slds-table_cell-buffer slds-table_bordered">
            <thead>
            <tr className="slds-line-height_reset">
                <th className="" scope="col">
                    <div className="slds-truncate" title="Name">Nom de la compétence</div>
                </th>
                <th className="" scope="col">
                    <div className="slds-truncate" title="Competence type">Type de compétence</div>
                </th>
            </tr>
            </thead>
            <tbody>
            {data && Array.isArray(data.records) && data.records.map((d, idx) => (
                <tr className="slds-hint-parent">
                    <th data-label={d.Name} scope="row">
                        <div className="slds-truncate" title={d.Name}>{d.Name}</div>
                    </th>
                    <td data-label={d.Type__c}>
                        <div className="slds-truncate" title={d.Type__c}>{d.Type__c}</div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
    return (
        <div>
            {
                isLoading
                    ? renderLoading()
                    :
                    renderHeader()
            }
            {
                !isLoading && renderBody()
            }
        </div>
    );
}

export default Skill;
