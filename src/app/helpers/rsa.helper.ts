import { Injectable } from '@angular/core';
import * as Forge from 'node-forge';
// Add comment
@Injectable({
  providedIn: 'root',
})
export class RSAHelper {
  publicKey: string = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCZLoFINhwfBFR5IWVLucv9YsKC
uPpx/DCniIcUtlxYZGqumCQlnVSZbnms/gCRDe2VdL090tJJynENaic5QQE4rQJ5
3p2+9X6FVDIEkA9ubLbbRbPle9C3f7UK0RTKxpkItlv2MWgFWMpRi0gNdzlHbBET
U3poMl1VO5+3TU/m8QIDAQAB
-----END PUBLIC KEY-----`;

  constructor() {}

  encryptWithPublicKey(valueToEncrypt: string): string {
    const rsa = Forge.pki.publicKeyFromPem(this.publicKey);
    return window.btoa(rsa.encrypt(valueToEncrypt.toString()));
  }
}
