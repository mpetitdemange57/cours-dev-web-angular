export interface Person {
  id?: string;
  nom?: string;
  prenom?: string;
  photo?: string | ArrayBuffer | null;
  age?: string;
  sexe?: string;
  telephone?: string;
  email?: string;
  titres?: string[];
  chefId?: string | null;
}
