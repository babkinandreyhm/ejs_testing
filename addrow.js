/**
 * Created with JetBrains PhpStorm.
 * User: andrey.babkin
 * Date: 15.10.12
 * Time: 18:43
 * To change this template use File | Settings | File Templates.
 */
function add_row(){
    data._new[data._new.length]={original:'', translation:'', translation_type:'Brands'};
    ejs.update('res',data);
}
