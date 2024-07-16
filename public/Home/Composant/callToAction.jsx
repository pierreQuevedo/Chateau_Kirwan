import '../../css/callToAction.css'

// const contentsCallToActions = [
//     {
//         id: 'LesVins_btn', 
//         textBtn:'Découvrir nos vins',
//     },
//     {
//         id: 'Visites_btn', 
//         textBtn:'Découvrez nos offres',
//     },
//     {
//         id: 'Domaine_btn', 
//         textBtn:'Découvrir le Château Kirwan',
//     },
//     {
//         id: 'Evenement_btn', 
//         textBtn:'Découvrir nos offres',
//     }
// ]

// export function Btn({id}) {
//     const contentCallToAction = contentsCallToActions.find(contentCallToAction => contentCallToAction.id === id)

//     return(
//         <div key={contentCallToAction.id} >
//             <button dangerouslySetInnerHTML={{__html: contentCallToAction.textBtn}} id="callToAction"> 
//                 <div className="btnLine_container">
//                     <div className="btnLine btnLine1"></div>
//                     <div className="btnLine btnLine2"></div>
//                 </div>
//             </button>
//         </div>
//     )
// }

export function Btn() {

    return(
        <button id="callToAction"> Découvrir nos vins
            <div className="btnLine_container">
                <div className="btnLine btnLine1"></div>
                <div className="btnLine btnLine2"></div>
            </div>
        </button>
    )
}