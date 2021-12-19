import * as fs from 'fs';
import {Url} from './url.js'

function base64_encode(file) {
  let bitmap;
  try{
    bitmap = fs.readFileSync(Url._imgUrl + "/" + file);
  } catch (e){
    return null;
  }
  return 'data:image/jpg;base64,' + new Buffer(bitmap).toString('base64');
}

export {base64_encode};
