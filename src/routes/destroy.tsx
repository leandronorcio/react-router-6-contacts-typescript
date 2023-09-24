import {
  ActionFunctionArgs,
  ParamParseKey,
  Params,
  redirect,
} from 'react-router-dom';
import { deleteContact } from '../contacts';
import { Paths } from '../router';

interface DestroyContactArgs extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof Paths.contactDestroy>>;
}

export async function action({ params }: DestroyContactArgs) {
  if (!params.contactId) throw 'Please provide a contact id.';
  await deleteContact(params.contactId);
  return redirect('/');
}
