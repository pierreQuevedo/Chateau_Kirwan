import '../../css/callToAction.css'

// const contentsCallToActions = [
//     {
//         id: 'LesVins', 
//         textBtn:'Découvrir nos vins',
//     },
//     {
//         id: 'Visites', 
//         textBtn:'Découvrez nos offres',
//     },
//     {
//         id: 'Domaine', 
//         textBtn:'Découvrir le Château Kirwan',
//     },
//     {
//         id: 'Evenement', 
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