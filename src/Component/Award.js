import {useState} from "react";
import {Link} from "react-router-dom";

function Award() {
    // /services/data/v50.0/query/?q=SELECT+Id,+Name,+Organization__c,+Date__c+FROM%20Award__c
    const data = {
        "totalSize" : 6,
        "done" : true,
        "records" : [ {
            "attributes" : {
                "type" : "Award__c",
                "url" : "/services/data/v50.0/sobjects/Award__c/a0R2o00000XT7WWEA1"
            },
            "Id" : "a0R2o00000XT7WWEA1",
            "Name" : "DEV450",
            "Organization__c" : "Salesforce",
            "Date__c" : "2020-09-24"
        }, {
            "attributes" : {
                "type" : "Award__c",
                "url" : "/services/data/v50.0/sobjects/Award__c/a0R2o00000XT7WREA1"
            },
            "Id" : "a0R2o00000XT7WREA1",
            "Name" : "ADM201",
            "Organization__c" : "Salesforce",
            "Date__c" : "2019-10-11"
        }, {
            "attributes" : {
                "type" : "Award__c",
                "url" : "/services/data/v50.0/sobjects/Award__c/a0R2o00000XT7WSEA1"
            },
            "Id" : "a0R2o00000XT7WSEA1",
            "Name" : "Angular",
            "Organization__c" : "OpenClassroom",
            "Date__c" : "2019-07-19"
        }, {
            "attributes" : {
                "type" : "Award__c",
                "url" : "/services/data/v50.0/sobjects/Award__c/a0R2o00000XT7WTEA1"
            },
            "Id" : "a0R2o00000XT7WTEA1",
            "Name" : "Ruby",
            "Organization__c" : "OpenClassroom",
            "Date__c" : "2019-03-15"
        }, {
            "attributes" : {
                "type" : "Award__c",
                "url" : "/services/data/v50.0/sobjects/Award__c/a0R2o00000XT7XAEA1"
            },
            "Id" : "a0R2o00000XT7XAEA1",
            "Name" : "Java",
            "Organization__c" : "OpenClassroom",
            "Date__c" : "2019-07-26"
        }, {
            "attributes" : {
                "type" : "Award__c",
                "url" : "/services/data/v50.0/sobjects/Award__c/a0R2o00000XT7XBEA1"
            },
            "Id" : "a0R2o00000XT7XBEA1",
            "Name" : "Linux",
            "Organization__c" : "OpenClassroom",
            "Date__c" : "2019-03-01"
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
                            <span className="slds-icon_container slds-icon-standard-reward">
                                <svg className="slds-icon slds-page-header__icon" aria-hidden="true">
                                    <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#reward"></use>
                                </svg>
                            </span>
                        </div>
                        <div className="slds-media__body">
                            <div className="slds-page-header__name">
                                <div className="slds-page-header__name-title">
                                    <h1>
                                        <span>Distinction</span>
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
                    <div className="slds-truncate" title="Name">Nom de la distinction</div>
                </th>
                <th className="" scope="col">
                    <div className="slds-truncate" title="Organization Name">Nom de l'organisme</div>
                </th>
                <th className="" scope="col">
                    <div className="slds-truncate" title="Date">Date</div>
                </th>
            </tr>
            </thead>
            <tbody>
            {data && Array.isArray(data.records) && data.records.map((d, idx) => (
                <tr className="slds-hint-parent">
                    <th data-label={d.Name} scope="row">
                        <div className="slds-truncate" title={d.Name}>{d.Name}</div>
                    </th>
                    <td data-label={d.Organization__c}>
                        <div className="slds-truncate" title={d.Organization__c}>{d.Organization__c}</div>
                    </td>
                    <td data-label={d.Date__c}>
                        <div className="slds-truncate" title={d.Date__c}>{d.Date__c}</div>
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

export default Award;
