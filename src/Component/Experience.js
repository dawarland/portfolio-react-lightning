import {useState, useEffect} from "react";
import {useAuthState} from "../Context";
import RecordModal from "./RecordModal"

function Experience() {
    // /services/data/v50.0/query/?q=SELECT+Id,+Name,+Company__c,+City__c,+isCurrentlyWork__c+FROM%20Experience__c
    let dataObj = {
        "totalSize" : 5,
        "done" : true,
        "records" : [ {
            "attributes" : {
                "type" : "Experience__c",
                "url" : "/services/data/v50.0/sobjects/Experience__c/a0J2o00000x6cL6EAI"
            },
            "Id" : "a0J2o00000x6cL6EAI",
            "Name" : "Consultant Technique Salesforce ☁",
            "Company__c" : "Naturalia x Capgemini ♠",
            "City__c" : "Issy Les Moulineaux",
            "isCurrentlyWork__c" : false
        }, {
            "attributes" : {
                "type" : "Experience__c",
                "url" : "/services/data/v50.0/sobjects/Experience__c/a0J2o00000x6cL7EAI"
            },
            "Id" : "a0J2o00000x6cL7EAI",
            "Name" : "Professeur d'Informatique",
            "Company__c" : "CodeCodeCodec",
            "City__c" : "Paris",
            "isCurrentlyWork__c" : true
        }, {
            "attributes" : {
                "type" : "Experience__c",
                "url" : "/services/data/v50.0/sobjects/Experience__c/a0J2o00000x6cL8EAI"
            },
            "Id" : "a0J2o00000x6cL8EAI",
            "Name" : "Développeur Informatique",
            "Company__c" : "VODSI",
            "City__c" : "Paris",
            "isCurrentlyWork__c" : false
        }, {
            "attributes" : {
                "type" : "Experience__c",
                "url" : "/services/data/v50.0/sobjects/Experience__c/a0J2o00000x6cLBEAY"
            },
            "Id" : "a0J2o00000x6cLBEAY",
            "Name" : "Ingenieur Logiciel",
            "Company__c" : "Capgemini",
            "City__c" : "Issy Les Moulineaux",
            "isCurrentlyWork__c" : true
        }, {
            "attributes" : {
                "type" : "Experience__c",
                "url" : "/services/data/v50.0/sobjects/Experience__c/a0J2o00000x6cKwEAI"
            },
            "Id" : "a0J2o00000x6cKwEAI",
            "Name" : "Consultant Technique Salesforce ☁",
            "Company__c" : "Total x Capgemini ♠",
            "City__c" : "La Defense",
            "isCurrentlyWork__c" : false
        } ,
            {
                "attributes" : {
                    "type" : "Experience__c",
                    "url" : "/services/data/v50.0/sobjects/Experience__c/a0J2o00000x6cKqEAI"
                },
                "Id" : "a0J2o00000x6cKqEAI",
                "Name" : "Consultant Technique Salesforce ☁",
                "Company__c" : "France Boissons x Capgemini ♠",
                "City__c" : "Rueil Malmaison",
                "isCurrentlyWork__c" : false
            },
            {
                "attributes" : {
                    "type" : "Experience__c",
                    "url" : "/services/data/v50.0/sobjects/Experience__c/a0J2o00000x7aKqEAI"
                },
                "Id" : "a0J2o00000x7aKqEAI",
                "Name" : "Consultant Technique Salesforce ☁",
                "Company__c" : "Renault x Capgemini ♠",
                "City__c" : "Boulogne Billancourt",
                "isCurrentlyWork__c" : true
            }]
    };
    const [isLoading, setisLoading] = useState(false);
    const [data, setData] = useState({});

    const [modalOpened, setModalOpened] = useState(false);
    const [recordSelected, setRecordSelected] = useState();

    const store = useAuthState();
    const userDetails = store.auth;

    useEffect(() => {
        if(userDetails && userDetails.token){
            fetch("https://williamsarland-dev-ed.my.salesforce.com/services/data/v50.0/query/?q=SELECT+Id,+Name,+Company__c,+City__c,+isCurrentlyWork__c+FROM%20Experience__c", {
                headers: {
                    Authorization: `Bearer ${userDetails.token}`
                }
            }).then((response) => {
                if (response.ok) {
                    response.json().then((json) => {
                        setData(json);
                    });
                } else if (response.status !== 401) { // Ignore 'unauthorized' responses before logging in
                    console.error('Failed to retrieve logged user.', JSON.stringify(response));

                }
            }).catch((e)=>{
                setData(dataObj);
            })
        }
    },[]);

    const openModal = (e, record) => {
        e.preventDefault();
        setRecordSelected(record);
        setModalOpened(true);
        console.log(record)
    };
    const closeModal = () => {
        setModalOpened(false);
    };
    const showModal = (record) => {
        return (
            record &&
            <RecordModal showModal={modalOpened} closeModal={closeModal}>
                <div className="slds-modal__header">
                    <h2>{record.Name}</h2>
                </div>
                <div className="slds-modal__content slds-p-around--small slds-scrollable_y">
                    <div className="slds-form-element slds-m-around--small">
                        <label className="slds-form-element__label" htmlFor="form-element-01">Nom</label>
                        <div className="slds-form-element__control">
                            <input type="text" id="form-element-01" value={record.Name} className="slds-input"/>
                        </div>
                        <label className="slds-form-element__label" htmlFor="form-element-02">Société</label>
                        <div className="slds-form-element__control">
                            <input type="url" id="form-element-01" value={record.Company__c} className="slds-input"/>
                        </div>
                    </div>
                    <div className="slds-map_container">
                        <div className="slds-map">
                            <iframe id="GoogleMapID" title={record.City__c}
                                    src={`https://www.google.com/maps/embed/v1/place?q=${(record.City__c).toLowerCase()}&key=AIzaSyDliLquGXGts9S8YtkWVolSQEJdBL1ZuWc`}></iframe>
                        </div>
                    </div>
                </div>
                <div className="slds-modal__footer">
                    <button className="slds-button slds-button_brand" onClick={closeModal}>Fermer</button>
                </div>
            </RecordModal> )
    } ;
    const renderLoading = () => (
        <div className="demo-only demo--inverse" style="height:6rem;position:relative">
            <div role="status" className="slds-spinner slds-spinner_medium">
                <span className="slds-assistive-text">Loading</span>
                <div className="slds-spinner__dot-a"></div>
                <div className="slds-spinner__dot-b"></div>
            </div>
        </div>
    );
    const renderHeader = () => (
        <div className="slds-page-header">
            <div className="slds-page-header__row">
                <div className="slds-page-header__col-title">
                    <div className="slds-media">
                        <div className="slds-media__figure">
                            <span className="slds-icon_container slds-icon-standard-timesheet">
                                <svg className="slds-icon slds-page-header__icon" aria-hidden="true">
                                    <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#timesheet"></use>
                                </svg>
                            </span>
                        </div>
                        <div className="slds-media__body">
                            <div className="slds-page-header__name">
                                <div className="slds-page-header__name-title">
                                    <h1>
                                        <span>Experience</span>
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
                    <div className="slds-truncate" title="Name">Nom du poste</div>
                </th>
                <th className="" scope="col">
                    <div className="slds-truncate" title="Company Name">Nom de la société</div>
                </th>
                <th className="" scope="col">
                    <div className="slds-truncate" title="City">Ville</div>
                </th>
                <th className="" scope="col">
                    <div className="slds-truncate" title="I'm currently working">Travaille actuellement ?</div>
                </th>
            </tr>
            </thead>
            <tbody>
            {data && Array.isArray(data.records) && data.records.map((d, idx) => (
                <tr className="slds-hint-parent">
                    <th data-label={d.Name} scope="row">
                        <div className="slds-truncate" title={d.Name}>
                            <a href="javascript:void(0);" tabIndex="-1" onClick={(event)=>openModal(event, d)}>{d.Name}</a>
                        </div>
                    </th>
                    <td data-label={d.School__c}>
                        <div className="slds-truncate" title={d.Company__c}>{d.Company__c}</div>
                    </td>
                    <td data-label={d.City__c}>
                        <div className="slds-truncate" title={d.City__c}>{d.City__c}</div>
                    </td>
                    <td data-label={d.City__c}>
                        <div className="slds-truncate" title={d.isCurrentlyWork__c}><input type="checkbox" name="options" id="checkbox-unique-id-73" value="checkbox-unique-id-73" onChange={()=>(null)} checked={d.isCurrentlyWork__c} /></div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
    return (
        <div>
            {
                !data
                    ? renderLoading()
                    : ( <>
                            {renderHeader()}
                            {renderBody()}
                            {showModal(recordSelected)}
                        </>
                    )

            }
        </div>
    );
}

export default Experience;
