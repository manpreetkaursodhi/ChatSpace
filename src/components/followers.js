import React from "react";
import { Navbar } from "./Navbar";
import './style.css';

const follower=[
    "1. georgian_bewildere",
    "2. birchact_ual",
    "3. sandrind_",
    "4. tomatoep_olite",
    "5. megahumo_rous",
    "6. poxdrunk_",
    "7. tanacous_tic",
    "8. quantity_tricky",
    "9. fibberqu_ality",
    "10. roomyle_banese",
    "11. keyshir_t",
    "12. situati_onjuly",
    "13. belgian_bazaar",
    "14. seedwav_eson",
    "15. initiat_iveformer",
    "16. tumbleo_ften",
    "17. hermitj_ockstrap",
    "18. nursery_onions",
    "19. intesti_nesqueak",
    "20. robearn_est",
    "21. sparkle_rdelirious",
    "22. wrackau_spicious",
    "23. halldri_nk",
    "24. posteri_orpurser",
    "25. dietscr_eeching",
    "26. scopere_lease",
    "27. daughte_rbag",
    "28. disastr_ousout"
]

const Followers = () => {
    return (
        <div>
            <Navbar/>
            <h1 className="follower_head">Your Followers</h1>
            <div className="follower_list">{follower.map(item => { return <div className="itemList">{item}</div>})}</div>
        </div>
        )
}

export default Followers;