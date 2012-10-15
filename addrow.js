/**
 * Created with JetBrains PhpStorm.
 * User: andrey.babkin
 * Date: 15.10.12
 * Time: 18:43
 * To change this template use File | Settings | File Templates.
 */
function add_row(){
    var html=ejs.update('res',{_new:[{original:'', translation:'', translation_type:'Brands'}]});
    //document.getElementById('res').innerHTML=html;
    /*data._new[data._new.length]={original:'', translation:'', translation_type:'Brands'};
    redraw();*/
}
