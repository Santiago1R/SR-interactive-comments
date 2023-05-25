import { comentario1,comentario2,comentario3,comentario4} from "./comments.js";
import { createComment } from "./create-comment.js";

const comentarios = [comentario1,comentario3,comentario4];
//id,p,timeAgo,score,img,username
comentarios.forEach(createComment);
