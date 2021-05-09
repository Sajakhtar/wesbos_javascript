// console.log('itworks');

const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(e) {
        // hide all other tab panels
        tabPanels.forEach((panel) => (panel.hidden = true));

        // mark all tabs as unselected
        tabButtons.forEach((tab) => {
                // tab.ariaSelected = false; // doesnt work
                tab.setAttribute('aria-selected', false);
        });

        // mark clicked tab as selected
        e.currentTarget.setAttribute('aria-selected', true);

        // find and show assoicated tabPanel
        const { id } = e.currentTarget;

        //  METHOD 1
        // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
        // tabPanel.hidden = false;

        // METHOD 2 - find in the array of tab panels
        // .find() method works for Arrays, not nodeLists, convert nodeList to Array
        const tabPanel = tabPanels.find((panel) => panel.getAttribute('aria-labelledby') === id);

        tabPanel.hidden = false;
}

tabButtons.forEach((button) => button.addEventListener('click', handleTabClick));
