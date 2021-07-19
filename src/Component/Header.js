import React, { useState } from 'react';
import {Link} from "react-router-dom";

function Header() {
    const data = ["Home", "Experience", "Education", "Award", "Skill", "Interest", "Salesforce", "Project"];
    const [actIndex, setActIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const intentFunct = idx => {
        setActIndex( idx );
    };

    const openMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <header className="slds-global-header">
                <a href="javascript:void(0);" className="slds-assistive-text slds-assistive-text_focus">Skip to
                    Navigation</a>
                <a href="javascript:void(0);" className="slds-assistive-text slds-assistive-text_focus">Skip to Main
                    Content</a>
                <div className="slds-global-header slds-grid slds-grid_align-spread">
                    <div className="slds-global-header__item">
                        <div className="slds-global-header__logo">
                            <span className="slds-assistive-text">Salesforce</span>
                        </div>
                    </div>
                    <div className="slds-global-header__item slds-global-header__item_search">
                        <div className="slds-form-element">
                            <label className="slds-form-element__label slds-assistive-text" htmlFor="combobox-id-4">Search
                                Salesforce</label>
                            <div className="slds-form-element__control">
                                <div className="slds-combobox-group">
                                    <div className="slds-combobox_object-switcher slds-combobox-addon_start">
                                        <div className="slds-form-element">
                                            <label className="slds-form-element__label slds-assistive-text"
                                                   htmlFor="objectswitcher-combobox-id-4">Filter Search by:</label>
                                            <div className="slds-form-element__control">
                                                <div className="slds-combobox_container">
                                                    <div
                                                        className="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click"
                                                        aria-controls="primary-search-combobox-id-3"
                                                        aria-expanded="false" aria-haspopup="listbox" role="combobox">
                                                        <div
                                                            className="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right"
                                                            role="none">
                                                            <input type="text"
                                                                   className="slds-input slds-combobox__input slds-combobox__input-value"
                                                                   id="objectswitcher-combobox-id-4"
                                                                   aria-controls="objectswitcher-listbox-id-4"
                                                                   autoComplete="off" role="textbox" placeholder=" "
                                                                   value="Accounts"
                                                            />
                                                            <span
                                                                className="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
<svg className="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
<use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
</svg>
</span>
                                                        </div>
                                                        <div id="objectswitcher-listbox-id-4"
                                                             className="slds-dropdown slds-dropdown_length-5 slds-dropdown_x-small slds-dropdown_left"
                                                             role="listbox">
                                                            <ul className="slds-listbox slds-listbox_vertical"
                                                                role="group" aria-label="Suggested for you">
                                                                <li role="presentation" className="slds-listbox__item">
                                                                    <div id="object0"
                                                                         className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                                                                         role="presentation">
                                                                        <h3 className="slds-listbox__option-header"
                                                                            role="presentation">Suggested for you</h3>
                                                                    </div>
                                                                </li>
                                                                <li role="presentation" className="slds-listbox__item">
                                                                    <div aria-checked="true" id="object1"
                                                                         className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected"
                                                                         role="option">
<span className="slds-media__figure slds-listbox__option-icon">
<span className="slds-icon_container slds-icon-utility-check slds-current-color">
<svg className="slds-icon slds-icon_x-small" aria-hidden="true">
<use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
</svg>
</span>
</span>
                                                                        <span className="slds-media__body">
<span className="slds-truncate" title="Accounts">Accounts</span>
</span>
                                                                    </div>
                                                                </li>
                                                                <li role="presentation" className="slds-listbox__item">
                                                                    <div id="object2"
                                                                         className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                                                                         role="option">
                                                                        <span
                                                                            className="slds-media__figure slds-listbox__option-icon"></span>
                                                                        <span className="slds-media__body">
<span className="slds-truncate" title="Reports">Reports</span>
</span>
                                                                    </div>
                                                                </li>
                                                                <li role="presentation" className="slds-listbox__item">
                                                                    <div id="object3"
                                                                         className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                                                                         role="option">
                                                                        <span
                                                                            className="slds-media__figure slds-listbox__option-icon"></span>
                                                                        <span className="slds-media__body">
<span className="slds-truncate" title="Contacts">Contacts</span>
</span>
                                                                    </div>
                                                                </li>
                                                                <li role="presentation" className="slds-listbox__item">
                                                                    <div id="object4"
                                                                         className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                                                                         role="option">
                                                                        <span
                                                                            className="slds-media__figure slds-listbox__option-icon"></span>
                                                                        <span className="slds-media__body">
<span className="slds-truncate" title="Files">Files</span>
</span>
                                                                    </div>
                                                                </li>
                                                                <li role="presentation" className="slds-listbox__item">
                                                                    <div id="object5"
                                                                         className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                                                                         role="option">
                                                                        <span
                                                                            className="slds-media__figure slds-listbox__option-icon"></span>
                                                                        <span className="slds-media__body">
<span className="slds-truncate" title="Groups">Groups</span>
</span>
                                                                    </div>
                                                                </li>
                                                                <li role="presentation" className="slds-listbox__item">
                                                                    <div id="object6"
                                                                         className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                                                                         role="option">
                                                                        <span
                                                                            className="slds-media__figure slds-listbox__option-icon"></span>
                                                                        <span className="slds-media__body">
<span className="slds-truncate" title="Leads">Leads</span>
</span>
                                                                    </div>
                                                                </li>
                                                                <li role="presentation" className="slds-listbox__item">
                                                                    <div id="object7"
                                                                         className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small"
                                                                         role="option">
                                                                        <span
                                                                            className="slds-media__figure slds-listbox__option-icon"></span>
                                                                        <span className="slds-media__body">
<span className="slds-truncate" title="Notes">Notes</span>
</span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slds-combobox_container slds-combobox-addon_end">
                                        <div
                                            className="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
                                            aria-expanded="true" aria-haspopup="listbox"
                                            id="primary-search-combobox-id-3" role="combobox">
                                            <div
                                                className="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_left slds-global-search__form-element"
                                                role="none">
<span className="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_left">
<svg className="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
<use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
</svg>
</span>
                                                <input type="text"
                                                       className="slds-input slds-combobox__input slds-has-focus"
                                                       id="combobox-id-4" aria-autocomplete="list"
                                                       aria-controls="search-listbox-id-3" autoComplete="off"
                                                       role="textbox" placeholder="Search Salesforce"/>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slds-global-header__item">
                        <ul className="slds-global-actions">
                            <li className="slds-global-actions__item">
                                <div
                                    className="slds-global-actions__favorites slds-dropdown-trigger slds-dropdown-trigger_click">
                                    <div className="slds-button-group">
                                        <button
                                            className="slds-button slds-button_icon slds-global-actions__favorites-action slds-button_icon slds-button_icon-border slds-button_icon-small"
                                            aria-pressed="false" title="Toggle Favorites">
                                            <svg className="slds-button__icon" aria-hidden="true">
                                                <use
                                                    xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#favorite"></use>
                                            </svg>
                                            <span className="slds-assistive-text">Toggle Favorite</span>
                                        </button>
                                        <button
                                            className="slds-button slds-button_icon slds-global-actions__favorites-more slds-button_icon slds-button_icon-border slds-button_icon-small"
                                            title="View Favorites">
                                            <svg className="slds-button__icon slds-button__icon_small"
                                                 aria-hidden="true">
                                                <use
                                                    xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                            </svg>
                                            <span className="slds-assistive-text">View Favorites</span>
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li className="slds-global-actions__item">
                                <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                                    <button
                                        className="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__task slds-global-actions__item-action"
                                        aria-haspopup="true" title="Global Actions">
                                        <svg className="slds-button__icon" aria-hidden="true">
                                            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                                        </svg>
                                        <span className="slds-assistive-text">Global Actions</span>
                                    </button>
                                </div>
                            </li>
                            <li className="slds-global-actions__item">
                                <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                                    <button
                                        className="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__help slds-global-actions__item-action"
                                        aria-haspopup="true" title="Help and Training">
                                        <svg className="slds-button__icon slds-global-header__icon" aria-hidden="true">
                                            <use
                                                xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#question"></use>
                                        </svg>
                                        <span className="slds-assistive-text">Help and Training</span>
                                    </button>
                                </div>
                            </li>
                            <li className="slds-global-actions__item">
                                <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                                    <button
                                        className="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__setup slds-global-actions__item-action"
                                        aria-haspopup="true" title="Setup">
                                        <svg className="slds-button__icon slds-global-header__icon" aria-hidden="true">
                                            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#setup"></use>
                                        </svg>
                                        <span className="slds-assistive-text">Setup</span>
                                    </button>
                                </div>
                            </li>
                            <li className="slds-global-actions__item">
                                <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                                    <button
                                        className="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action"
                                        title="no new notifications" aria-live="assertive" aria-atomic="true">
                                        <svg className="slds-button__icon slds-global-header__icon" aria-hidden="true">
                                            <use
                                                xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#notification"></use>
                                        </svg>
                                        <span className="slds-assistive-text">no new notifications</span>
                                    </button>
                                    <span aria-hidden="true" className="slds-notification-badge">0</span>
                                </div>
                            </li>
                            <li className="slds-global-actions__item">
                                <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                                    <button
                                        className="slds-button slds-global-actions__avatar slds-global-actions__item-action"
                                        title="person name" aria-haspopup="true">
<span className="slds-avatar slds-avatar_circle slds-avatar_medium">
<img alt="Person name" src="/assets/images/profile_avatar_96.png" title="User avatar"/>
</span>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        <div className="slds-context-bar">
            <div className="slds-context-bar__primary">
                <div
                    className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover">
                    <div className="slds-context-bar__icon-action">
                        <button className="slds-button slds-icon-waffle_container slds-context-bar__button"
                                title="Description of the icon when needed">
                        <span className="slds-icon-waffle">
                            <span className="slds-r1"></span>
                            <span className="slds-r2"></span>
                            <span className="slds-r3"></span>
                            <span className="slds-r4"></span>
                            <span className="slds-r5"></span>
                            <span className="slds-r6"></span>
                            <span className="slds-r7"></span>
                            <span className="slds-r8"></span>
                            <span className="slds-r9"></span>
                        </span>
                            <span className="slds-assistive-text">Open App Launcher</span>
                        </button>
                    </div>
                    <span className="slds-context-bar__label-action slds-context-bar__app-name">
                    <span className="slds-truncate" title="App Name">WillForce</span>
                    </span>
                </div>
            </div>
            <nav className="slds-context-bar__secondary" role="navigation">
                <ul className="slds-grid">
                    {data && Array.isArray(data) && data.map((d, idx) => (
                        <li
                            className={"slds-context-bar__item " + (actIndex === idx ? "slds-is-active" : "")}
                            // Note that using arrow functions inside "onClick" is an anti-pattern
                            onClick={() => intentFunct(idx)}
                        >
                            <Link to={"/"+d} className="slds-context-bar__label-action">{d}</Link>

                        </li>
                    ))}

                    {/* Pour Mobile
                        <li className="slds-tabs_default__item slds-tabs_default__overflow-button" title="More Tabs"
                        role="presentation">
                        <div className={"slds-dropdown-trigger slds-dropdown-trigger_click" + (isOpen ? "slds-is-open" : "")}>
                            <button className="slds-button" aria-haspopup="true" onClick={() => openMenu()} >
                                Menu
                            </button>
                            <div className="slds-dropdown slds-dropdown_right">
                                <ul className="slds-dropdown__list slds-dropdown_length-with-icon-10" role="menu">
                                    {data && Array.isArray(data) && data.map((d, idx) => (
                                        <li
                                            className={"slds-dropdown__item " + (actIndex === idx ? "slds-is-active" : "")}
                                            // Note that using arrow functions inside "onClick" is an anti-pattern
                                            onClick={() => intentFunct(idx)}
                                        >
                                            <Link to={"/"+d} className="slds-truncate" title={d}>{d}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                   */}
                </ul>
            </nav>
        </div>
        </div>
    );
}

export default Header;
