import './index.css'

const TabItem = props => {
  const {tabDetails, updateTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    updateTab(tabId)
  }

  const activeBtn = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeBtn}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
