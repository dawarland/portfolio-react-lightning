import React, {useContext,useState} from "react";
import { useAuthState } from "../Context";
import userData from "../userData.json";
import Loading from "./Loading";
import ScoreService from "../Services/ScoreService";

function Home() {
    const {landing} = userData;

    const store = useAuthState();
    const userDetails = store.auth;
    const [isLoading, setisLoading] = useState(userDetails.loading);


    const renderLoading = () => (
        <Loading />
    );
    const renderHeader = () => (
        <div className="slds-page-header slds-page-header_record-home">
            <div className="slds-page-header__row">
                <div className="slds-page-header__col-title">
                    <div className="slds-media">
                        <div className="slds-media__figure">
                        <span className="slds-icon_container slds-icon-standard-opportunity">
                        <svg className="slds-icon slds-page-header__icon" aria-hidden="true">
                        <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#user"></use>
                        </svg>
                        </span>
                        </div>
                        <div className="slds-media__body">
                            <div className="slds-page-header__name">
                                <div className="slds-page-header__name-title">
                                    <h1>
                                        <span>Personnel</span>
                                        <span className="slds-page-header__title slds-truncate"
                                              title="Acme - 1,200 Widgets">{landing ? `${landing.firstName} ${landing.lastName}` : ''}</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slds-page-header__col-actions">
                    <div className="slds-page-header__controls">
                        <div className="slds-page-header__control">
                            <button className="slds-button slds-button_neutral slds-button_stateful slds-not-selected"
                                    aria-live="assertive">
<span className="slds-text-not-selected">
<svg className="slds-button__icon slds-button__icon_small slds-button__icon_left" aria-hidden="true">
<use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
</svg>Follow</span>
                                <span className="slds-text-selected">
<svg className="slds-button__icon slds-button__icon_small slds-button__icon_left" aria-hidden="true">
<use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
</svg>Following</span>
                                <span className="slds-text-selected-focus">
<svg className="slds-button__icon slds-button__icon_small slds-button__icon_left" aria-hidden="true">
<use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
</svg>Unfollow</span>
                            </button>
                        </div>
                        <div className="slds-page-header__control">
                            <ul className="slds-button-group-list">
                                <li>
                                    <button className="slds-button slds-button_neutral">Edit</button>
                                </li>
                                <li>
                                    <button className="slds-button slds-button_neutral">Delete</button>
                                </li>
                                <li>
                                    <button className="slds-button slds-button_neutral">Clone</button>
                                </li>
                                <li>
                                    <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                                        <button className="slds-button slds-button_icon slds-button_icon-border-filled"
                                                aria-haspopup="true" title="More Actions" disabled>
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
            <div className="slds-page-header__row slds-page-header__row_gutters">
                <div className="slds-page-header__col-details">
                    <ul className="slds-page-header__detail-row">
                        <li className="slds-page-header__detail-block">
                            <div className="slds-text-title slds-truncate" title="Field 1">City</div>
                            <div className="slds-truncate"
                                 title="City">Paris
                            </div>
                        </li>
                        <li className="slds-page-header__detail-block">
                            <div className="slds-text-title slds-truncate" title="Field 2 (3)">Email</div>
                            <div className="slds-truncate"
                                 title="City"><a href="mailto:dawarland@gmail.com" target="on_blank">dawarland@gmail.com</a>
                            </div>
                        </li>
                        <li className="slds-page-header__detail-block">
                            <div className="slds-text-title slds-truncate" title="Field 3">Phone</div>
                            <div className="slds-truncate" title="Hyperlink">
                                <a href="tel:+33777306530" target="on_blank">07 77 30 65 30</a>
                            </div>
                        </li>
                        <li className="slds-page-header__detail-block">
                            <div className="slds-text-title slds-truncate" title="Field 4">Portfolio</div>
                            <div className="slds-truncate" title="Hyperlink">
                                <a href="https://williamsarland.fr" target="on_blank">williamsarland.fr</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
    const renderBody = () => (
        <div className="slds-tabs_default">
            <ul className="slds-tabs_default__nav" role="tablist">
                <li className="slds-tabs_default__item slds-is-active" title="Item One" role="presentation">
                    <a className="slds-tabs_default__link" href="javascript:void(0);" role="tab" tabIndex="0"
                       aria-selected="true" aria-controls="tab-default-1" id="tab-default-1__item">Activity</a>
                </li>
                <li className="slds-tabs_default__item" title="Item Two" role="presentation">
                    <a className="slds-tabs_default__link" href="javascript:void(0);" role="tab" tabIndex="-1"
                       aria-selected="false" aria-controls="tab-default-2" id="tab-default-2__item">Related to</a>
                </li>
                <li className="slds-tabs_default__item" title="Item Two" role="presentation">
                    <a className="slds-tabs_default__link" href="javascript:void(0);" role="tab" tabIndex="-2"
                       aria-selected="false" aria-controls="tab-default-3" id="tab-default-3__item">Details</a>
                </li>
            </ul>
            <div id="tab-default-1" className="slds-tabs_default__content slds-show" role="tabpanel"
                 aria-labelledby="tab-default-1__item">
                <ul className="slds-timeline">
                    <li>
                        <div className="slds-timeline__item_expandable slds-timeline__item_task">
                            <span className="slds-assistive-text">task</span>
                            <div className="slds-media">
                                <div className="slds-media__figure">
                                    <button className="slds-button slds-button_icon"
                                            title="Toggle details for Review proposals for EBC deck with larger team and have marketing review this"
                                            aria-controls="task-item-base">
                                        <svg className="slds-button__icon slds-timeline__details-action-icon"
                                             aria-hidden="true">
                                            <use linkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
                                        </svg>
                                        <span className="slds-assistive-text">Toggle details for Review proposals for EBC deck with larger team and have marketing review this</span>
                                    </button>
                                    <div className="slds-icon_container slds-icon-standard-task slds-timeline__icon"
                                         title="task">
                                        <svg className="slds-icon" aria-hidden="true">
                                            <use linkHref="/assets/icons/standard-sprite/svg/symbols.svg#task"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div className="slds-media__body">
                                    <div className="slds-grid slds-grid_align-spread slds-timeline__trigger">
                                        <div
                                            className="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
                                            <div className="slds-checkbox">
                                                <input type="checkbox" name="options" id="checkbox-unique-id-17"
                                                       value="checkbox-unique-id-17"/>
                                                <label className="slds-checkbox__label" htmlFor="checkbox-unique-id-17">
                                                    <span className="slds-checkbox_faux"></span>
                                                    <span className="slds-form-element__label slds-assistive-text">Mark Review proposals for EBC deck with larger team and have marketing review this complete</span>
                                                </label>
                                            </div>
                                            <h3 className="slds-truncate"
                                                title="Review proposals for EBC deck with larger team and have marketing review this">
                                                <a href="#">
                                                    <strong>Review proposals for the master's degree with larger team and have
                                                        professionals review this</strong>
                                                </a>
                                            </h3>
                                            <div className="slds-no-flex">
                                                <span className="slds-icon_container slds-icon-utility-rotate" title="Recurring Task">
                                                <svg className="slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small" aria-hidden="true">
                                                <use linkHref="/assets/icons/utility-sprite/svg/symbols.svg#rotate"></use>
                                                </svg>
                                                <span className="slds-assistive-text">Recurring Task</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="slds-timeline__actions slds-timeline__actions_inline">
                                            <p className="slds-timeline__date">9:00am | 3/20/17</p>
                                            <button
                                                className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
                                                aria-haspopup="true" title="More Options for this item">
                                                <svg className="slds-button__icon" aria-hidden="true">
                                                    <use linkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                                </svg>
                                                <span className="slds-assistive-text">More Options for this item</span>
                                            </button>
                                        </div>
                                    </div>
                                    <p className="slds-m-horizontal_xx-small">
                                        <a href="#">You</a> created a event with <a href="/">Williams</a> to interview him about last Semester
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="slds-timeline__item_expandable slds-timeline__item_call">
                            <span className="slds-assistive-text">log_a_call</span>
                            <div className="slds-media">
                                <div className="slds-media__figure">
                                    <button className="slds-button slds-button_icon"
                                            title="Toggle details for Mobile conversation on Monday"
                                            aria-controls="call-item-base">
                                        <svg className="slds-button__icon slds-timeline__details-action-icon"
                                             aria-hidden="true">
                                            <use linkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
                                        </svg>
                                        <span className="slds-assistive-text">Toggle details for Mobile conversation on Monday</span>
                                    </button>
                                    <div
                                        className="slds-icon_container slds-icon-standard-log-a-call slds-timeline__icon"
                                        title="call">
                                        <svg className="slds-icon slds-icon_small" aria-hidden="true">
                                            <use
                                                linkHref="/assets/icons/standard-sprite/svg/symbols.svg#log_a_call"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div className="slds-media__body">
                                    <div className="slds-grid slds-grid_align-spread slds-timeline__trigger">
                                        <div
                                            className="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
                                            <h3 className="slds-truncate" title="Validation S9">
                                                <strong>{ ScoreService("Validation S9",9) }</strong>
                                            </h3>
                                        </div>
                                        <div className="slds-timeline__actions slds-timeline__actions_inline">
                                            <p className="slds-timeline__date">10:00am | 2/15/21</p>
                                            <button
                                                className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
                                                aria-haspopup="true" title="More Options for this item">
                                                <svg className="slds-button__icon" aria-hidden="true">
                                                    <use
                                                        linkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                                </svg>
                                                <span className="slds-assistive-text">More Options for this item</span>
                                            </button>
                                        </div>
                                    </div>
                                    <p className="slds-m-horizontal_xx-small">
                                        <a href="#">You</a> received <a href="/">Williams</a> Semester 9 report</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="slds-timeline__item_expandable slds-timeline__item_email">
                            <span className="slds-assistive-text">email</span>
                            <div className="slds-media">
                                <div className="slds-media__figure">
                                    <button className="slds-button slds-button_icon"
                                            title="Toggle details for Re: Mobile conversation on Monday with the new global team"
                                            aria-controls="email-item-base">
                                        <svg className="slds-button__icon slds-timeline__details-action-icon"
                                             aria-hidden="true">
                                            <use linkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
                                        </svg>
                                        <span className="slds-assistive-text">Toggle details for Re: Mobile conversation on Monday with the new global team</span>
                                    </button>
                                    <div className="slds-icon_container slds-icon-standard-email slds-timeline__icon"
                                         title="email">
                                        <svg className="slds-icon slds-icon_small" aria-hidden="true">
                                            <use linkHref="/assets/icons/standard-sprite/svg/symbols.svg#email"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div className="slds-media__body">
                                    <div className="slds-grid slds-grid_align-spread slds-timeline__trigger">
                                        <div
                                            className="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
                                            <h3 className="slds-truncate" title="Validation S8">
                                                <strong>{ ScoreService("Validation S8",8) }</strong>
                                            </h3>
                                            <div className="slds-no-flex">
                                                <span className="slds-icon_container slds-icon-utility-groups" title="Group email">
                                                <svg className="slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small" aria-hidden="true">
                                                <use linkHref="/assets/icons/utility-sprite/svg/symbols.svg#groups"></use>
                                                </svg>
                                                <span className="slds-assistive-text">Group email</span>
                                                </span>
                                                <span className="slds-icon_container slds-icon-utility-attach"
                                                      title="Has attachments">
                                                <svg className="slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small" aria-hidden="true">
                                                <use linkHref="/assets/icons/utility-sprite/svg/symbols.svg#attach"></use>
                                                </svg>
                                                <span className="slds-assistive-text">Has attachments</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="slds-timeline__actions slds-timeline__actions_inline">
                                            <p className="slds-timeline__date">10:00am | 7/20/20</p>
                                            <button
                                                className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
                                                aria-haspopup="true" title="More Options for this item">
                                                <svg className="slds-button__icon" aria-hidden="true">
                                                    <use
                                                        linkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                                </svg>
                                                <span className="slds-assistive-text">More Options for this item</span>
                                            </button>
                                        </div>
                                    </div>
                                    <p className="slds-m-horizontal_xx-small">
                                        <a href="#">You</a> received <a href="/">Williams</a> Semester 8 report
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="slds-timeline__item_expandable slds-timeline__item_event">
                            <span className="slds-assistive-text">event</span>
                            <div className="slds-media">
                                <div className="slds-media__figure">
                                    <button className="slds-button slds-button_icon"
                                            title="Toggle details for EBC Follow up call"
                                            aria-controls="event-item-base">
                                        <svg className="slds-button__icon slds-timeline__details-action-icon"
                                             aria-hidden="true">
                                            <use linkHref="/assets/icons/utility-sprite/svg/symbols.svg#switch"></use>
                                        </svg>
                                        <span className="slds-assistive-text">Toggle details for EBC Follow up call</span>
                                    </button>
                                    <div className="slds-icon_container slds-icon-standard-event slds-timeline__icon"
                                         title="event">
                                        <svg className="slds-icon slds-icon_small" aria-hidden="true">
                                            <use linkHref="/assets/icons/standard-sprite/svg/symbols.svg#event"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div className="slds-media__body">
                                    <div className="slds-grid slds-grid_align-spread slds-timeline__trigger">
                                        <div
                                            className="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
                                            <h3 className="slds-truncate" title="Validation S7">
                                                    <strong>{ ScoreService("Validation S7",7) }</strong>
                                            </h3>
                                            <div className="slds-no-flex">
                                                <span className="slds-icon_container slds-icon-utility-world" title="Public sharing">
                                                    <svg className="slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small" aria-hidden="true">
                                                        <use linkHref="/assets/icons/utility-sprite/svg/symbols.svg#world"></use>
                                                    </svg>
                                                    <span className="slds-assistive-text">Public sharing</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="slds-timeline__actions slds-timeline__actions_inline">
                                            <p className="slds-timeline__date">10:30am | 7/13/19</p>
                                            <button className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" title="More Options for this item">
                                                <svg className="slds-button__icon" aria-hidden="true">
                                                    <use linkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                                </svg>
                                                <span className="slds-assistive-text">More Options for this item</span>
                                            </button>
                                        </div>
                                    </div>
                                    <p className="slds-m-horizontal_xx-small">
                                        <a href="#">You</a> received <a href="/">Williams</a> Semester 7 report</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div id="tab-default-2" className="slds-tabs_default__content slds-hide" role="tabpanel"
                 aria-labelledby="tab-default-2__item">Item Two Content
            </div>
            <div id="tab-default-3" className="slds-tabs_default__content slds-hide" role="tabpanel"
                 aria-labelledby="tab-default-3__item">Item Three Content
            </div>
        </div>
    );
    return (
        <div>
            {
                ! userDetails.user
                    ? renderLoading()
                    : ( <>
                        {renderHeader()}
                        {renderBody()}
                        </>
                    )

            }
            {
                //userDetails && <p>{JSON.stringify(userDetails)}</p>
            }
        </div>
    );
}

export default Home;
