import React from "react";
import { Navbar } from "./Navbar";
import './style.css'

const following = [
"1. warlike_cow",
"2. lambpar_ka",
"3. stadium_jeer",
"4. hopdesp_erate",
"5. kenyang_oring",
"6. lettuce_chirp",
"7. ghostan_gel",
"8. streakb_lame",
"9. crabstr_ategy",
"10. thunde_ringgrimacing",
"11. demure_guide",
"12. assort_edpaella",
"13. revers_esmoker",
"14. outspo_kenhellish",
"15. rhythm_ail",
"16. useles_smealy",
"17. shellf_ishchristian",
"18. vapidr_etire",
"19. kingca_reless",
"20. pretze_lgeek",
"21. fillca_roling",
"22. jukebo_xminer",
"23. turtle_dovevirtuous",
"24. ponied_ue",
"25. person_service",
"26. wheelb_ouquet",
"27. juicez_ealous",
"28. oceans_pikes",
"29. gangei_ght",
"30. availa_blenippy",
"31. people_longjohns",
"32. orange_artichokes",
"33. spinac_hlobe",
"34. sourim_partial",
"35. closer_print",
"36. passel_dout",
"37. horizo_nsense",
]

const Following = ()=>{
    return (
        <div>
            <Navbar/>
            <h1 className="following_head">Accounts you Follow</h1>
            <div className="following_list">{following.map(item => { return <div className="itemList">{item}</div>})}</div>
        </div>
        )
}

export default Following;