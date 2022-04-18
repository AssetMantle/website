import React, { useRef } from "react";
import styled from "styled-components";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function TAndCModal({ closeModal }) {
  const modalBody = useRef();
  const scrollBottomButton = useRef();

  return (
    <>
      <Container>
        <div className="modal___fo_bg" onClick={() => closeModal(false)}></div>
        <div className="modal__sc">
          <div className="modal_container">
            <h2 className="modal_container__title">
              <span className="yellow">ASSETMANTLE</span> AIRDROP CAMPAIGN
              PARTICIPATION TERMS AND CONDITIONS (T&Cs)
            </h2>
            <div className="modal_container__body" ref={modalBody}>
              <div className="modal_container__body_dis">
                IN THESE TERMS, WORDS AND EXPRESSIONS NOT OTHERWISE DEFINED
                SHALL, WHERE NOT INCONSISTENT WITH THE CONTEXT, HAVE THE
                MEANINGS RESPECTIVELY ASCRIBED THERETO IN THE ANNEX TO THESE
                TERMS.
              </div>

              <p>
                In these Terms, “<strong>we</strong>”, “<strong>us</strong>” or
                “<strong>Campaign Organiser</strong>” refers to{" "}
                <strong>
                  ADANTE INTERNATIONAL CORP, owner of AssetMantle Platform
                </strong>
                , Company Registration Number: 155720262 , a company
                incorporated in Republic of Panama and having its registered
                address at Via España, Delta Bank Building, 6th Floor, Suite
                604D, Panama City, Republic of Panama, and “<strong>our</strong>
                ” shall be construed accordingly. “<strong>You</strong>” refers
                to any person participating in the AssetMantle Airdrop Campaign,
                and “your” shall be construed accordingly.
              </p>

              <p>
                Each of you and the Campaign Organiser shall hereinafter be
                referred to as a “<strong>Party</strong>”, and collectively, you
                and the Campaign Organiser shall hereinafter be referred to as
                the “<strong>Parties</strong>”. The Campaign Organiser and its
                Affiliates shall hereinafter be collectively referred to as the
                “<strong>AssetMantle Group</strong>” and each a “
                <strong>AssetMantle Affiliate</strong>”.
              </p>

              <p>
                Your participation in the AssetMantle Airdrop Campaign is
                subject to these Terms as may be amended by us from time to time
                at our sole and absolute discretion. These Terms shall also
                include any other operating rules, policies and procedures which
                we may issue from time to time.
              </p>

              <p>
                We may revise these Terms at any time with or without notice to
                you and any changes will be uploaded on the website as
                accessible at{" "}
                <a
                  href="https://assetmantle.one/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://assetmantle.one/
                </a>{" "}
                (the “<strong>Website</strong>”) and/or its related social media
                channels (collectively “<strong>Channels</strong>”). These
                changes shall take effect from thedate of upload and your
                continued access, use of the Website, or participation in the
                AssetMantle Airdrop Campaign from such date shall be deemed to
                constitute acceptance of the new Terms. It shallbe your sole
                responsibility to check the Website for such changes from time
                to time. If you do not agree to these Terms, please exit the
                Website immediately and do not participate in the AssetMantle
                Airdrop Campaign.
              </p>

              <p>
                By accessing, browsing or viewing the Website or participating
                in the AssetMantle Airdrop Campaign, you:
              </p>

              <ol>
                <li>
                  <i>(a)</i>
                  agree to be bound by and to abide by the latest version of the
                  Terms;
                </li>
                <li>
                  <i>(b)</i>
                  represent and warrant that in the jurisdiction to which you
                  are subject of, you are of legal age to participate in the
                  AssetMantle Airdrop Campaign and to create binding obligations
                  for any liability you may incur as a result of the use of the
                  Website and/or your participation in the AssetMantle Airdrop
                  Campaign; and
                </li>
                <li>
                  <i>(c)</i>
                  represent and warrant that you are not a Disqualified Person
                  or acting on behalf of aDisqualified Person.
                </li>
              </ol>

              <p>
                <strong>
                  The Tokens are not intended to constitute securities of any
                  form, units in a business trust, units in a collective
                  investment scheme or any other form of investment in any
                  jurisdiction. This document and these Terms do not constitute
                  a prospectus or offer document of any sort and are not
                  intended to constitute an offer of securities of any form,
                  units in a business trust, units in a collective investment
                  scheme or any other form of investment, or a solicitation for
                  any form of investment in any jurisdiction. No regulatory
                  authority has examined or approved of these Terms. No such
                  action has been or will be taken by the Campaign Organiser
                  under the laws, regulatory requirements or rules of any
                  jurisdiction. The provision of these Terms to youdoes not
                  imply that the applicable laws, regulatory requirements or
                  rules have been complied with.
                </strong>
              </p>

              <p>
                The headings in these Terms are included for convenience only
                and shall not be taken into account in construing these Terms.
                References to “<strong>Paragraphs</strong>” are to be construed
                as references to the paragraphs of these Terms.
              </p>

              <p>
                The Parties <strong>HEREBY AGREE</strong> as follows:
              </p>

              <ol>
                <li>
                  <i>1.</i>
                  <div>
                    <strong>ASSETMANTLE AIRDROP CAMPAIGN</strong>
                    <br />
                    <ol>
                      <li>
                        <i>1.1</i>
                        <div>
                          Subject to Paragraphs 1.2, 1.3 and 2, to increase
                          awareness of the Project and to encourage users to
                          participate in the AssetMantle Ecosystem after its
                          launch, the Campaign Organiser intends to distribute a
                          certain number of Tokens (as may be determined by the
                          Campaign Organiser in its sole and absolute
                          discretion) free-of-charge to the following eligible
                          participants (“Eligible Participants”):
                          <br />
                          <ol>
                            <li>
                              <i>(a)</i>persons who prior to the AssetMantle
                              Airdrop Snapshot Date have participated in Staking
                              or Delegated Staking on at least one Supported
                              Staking Network; and
                            </li>
                            <li>
                              <i>(b)</i>have completed a Dust Transfer
                              Indication in accordance with Paragraph 1.2 prior
                              to the AssetMantle Airdrop Snapshot Date,
                            </li>
                          </ol>
                          <p>
                            by way of an “airdrop” as part of a marketing
                            campaign (“
                            <strong>AssetMantle Airdrop Campaign</strong>”).
                          </p>
                          <p>
                            To be eligible to receive Tokens as part of the
                            AssetMantle Airdrop Campaign, an Eligible
                            Participant must indicate his interest by
                            transferring a small amount of Supported Tokens (“
                            <strong>Dust Amount</strong>”) as may be determined
                            by the Campaign Organiser and published on the
                            Website to the Supported Token Designated Address,
                            provided that such Dust Amount shall be transferred
                            from:
                          </p>
                          <ol>
                            <li>
                              <i>1.2.1</i>the same Supported Token address that
                              is used by the Eligible Participants to perform
                              Staking or Delegated Staking as described in
                              Paragraph 1.1(a);
                            </li>
                            <li>
                              <i>1.2.2</i>such Supported Token wallet address
                              that is proprietary to such Eligible Participant,
                              which such Eligible Participant possesses full
                              custody and control over,
                            </li>
                          </ol>
                          <p>
                            <strong>(“Dust Transfer Indication”).</strong>
                          </p>
                        </div>
                      </li>
                      <li>
                        <i>1.2</i>You acknowledge and agree that the transfer of
                        Dust Amount to the Supported Token Designated Address is
                        to facilitate the Campaign Organizer’s whitelisting of
                        Eligible Participants for distribution of Tokens and is
                        under no circumstances a payment for Tokens to be
                        received as part of the AssetMantle Airdrop Campaign.
                        Whilst the Campaign Organiser may in its discretion
                        return the Dust Amount by executing a transfer of Dust
                        Amount back to the Supported Token wallet address from
                        which such Dust Amount was received, you shall have no
                        claim against any member of the AssetMantle Group
                        (including the CampaignOrganiser) for any unreturned
                        Dust Amount or any other claim in connection with your
                        transfer of Dust Amount.
                      </li>
                      <li>
                        <i>1.3</i>
                        <div>
                          Notwithstanding anything to the contrary (including
                          but not limited to what is stated in these Terms or as
                          published on the Website and/or the Channels), the
                          Campaign Organiser reserves the right:
                          <ol>
                            <li>
                              <i>1.3.1</i>not to distribute any Tokens to any
                              Eligible Participant for any reason as it may deem
                              fit; and
                            </li>
                            <li>
                              <i>1.3.2</i>where the Campaign Organiser decides
                              to distribute Tokens to an Eligible Participant,to
                              decide the amount of Tokens to be distributed to
                              such Eligible Participant.
                            </li>
                          </ol>
                        </div>
                      </li>
                      <li>
                        <i>1.4</i>You acknowledge and agree that the AssetMantle
                        Airdrop Campaign is intended to create awareness amongst
                        persons who are already involved in Staking or Delegated
                        Staking prior to the launch of the AssetMantle Airdrop
                        Campaign, hence : (a) your participation in Staking or
                        Delegated Staking; and/or (b) any purchase of Supported
                        Token by you, has not been influenced in any way by the
                        launch of the AssetMantle Airdrop Campaign and such
                        participation in Staking or Delegated Staking and/or
                        purchase of any Supported Token is for such other
                        purpose other than for the purpose of participating in
                        the AssetMantle Airdrop Campaign.
                      </li>
                      <li>
                        <i>1.5</i>Further to Paragraph 1.5, you acknowledge and
                        agree that none of the members of the AssetMantle Group
                        (including the Campaign Organiser) is liable for any
                        direct, indirect, special, incidental, consequential or
                        other losses of any kind (including but not limited to
                        loss of profits, a reduction in the market price of any
                        Supported Token, or any loss due to Stake Slashing or
                        loss of Staking Rewards), arising out of your
                        participation in Staking or Delegated Staking and/or
                        purchase of any Supported Token.
                      </li>
                    </ol>
                  </div>
                </li>
                <li>
                  <i>2.</i>
                  <div>
                    <strong>QUALIFIED PERSONS</strong>
                    <br />
                    <ol>
                      <li>
                        <i>2.1</i>You shall not participate in the AssetMantle
                        Airdrop Campaign if there are applicable legal
                        restrictions in your country of residence or domicile.
                        It is your sole responsibility to ensure that your
                        participation in the AssetMantle Airdrop Campaign is not
                        prohibited, restricted, curtailed, hindered, impaired or
                        otherwise adversely affected by any applicable law,
                        regulation or rule in your country of residence or
                        domicile.
                      </li>
                      <li>
                        <i>2.2</i>
                        <div>
                          You shall not participate and you are not eligible to
                          participate in the in the AssetMantle Airdrop Campaign
                          if: <br />
                          <ol>
                            <li>
                              <i>(a)</i>you are located in the People’s Republic
                              of China or if you are a citizen or resident (tax
                              or otherwise) of, or domiciled in, the People’s
                              Republic of China;
                            </li>
                            <li>
                              <i>(b)</i>you are located in the United States of
                              America or if you are a citizen, resident (tax or
                              otherwise) or green card holder of, or domiciled
                              in, the United States of America;
                            </li>
                            <li>
                              <i>(c)</i>you are located in a Sanctioned Country
                              or if you are a citizen, resident (tax or
                              otherwise) or green card holder of, or domiciled
                              in, a Sanctioned Country;
                            </li>
                            <li>
                              <i>(d)</i>such participation is prohibited,
                              restricted or unauthorized in any form or manner
                              whether in full or in part under the laws,
                              regulatory requirements or rules in any
                              jurisdiction applicable to you,
                            </li>
                          </ol>
                          <p>
                            which for the avoidance of doubt, shall include
                            (where applicable) body corporates, partnerships, or
                            such other legal arrangements based in, organised in
                            or established in the People’s Republic of China,
                            the United States of America or a Sanctioned Country
                            (collectively, a “
                            <strong>Disqualified Person</strong>”).
                          </p>
                        </div>
                      </li>
                      <li>
                        <i>2.3</i>You shall also not participate and you are not
                        eligible to participate in the in the AssetMantle
                        Airdrop Campaign if you are controlled or ultimately
                        controlled by another Disqualified Person.
                      </li>
                    </ol>
                  </div>
                </li>
                <li>
                  <i>3.</i>
                  <div>
                    <strong>
                      REPRESENTATIONS, WARRANTIES AND UNDERTAKINGS
                    </strong>
                    <br />
                    <ol>
                      <li>
                        <i>3.1.</i>
                        <div>
                          By accepting these Terms, you represent and warrant to
                          the Campaign Organiser as follows: <br />
                          <ol>
                            <li>
                              <i>(a)</i>you agree and acknowledge that the
                              Tokens do not constitute securities of any form,
                              units in a business trust, units in a collective
                              investment scheme or any other form of regulated
                              investment or investment product in any
                              jurisdiction;
                            </li>
                            <li>
                              <i>(b)</i>you acknowledge and understand that no
                              Token should be construed, interpreted, classified
                              or treated as enabling, or according any
                              opportunity to, you to participate in or receive
                              profits, income, or other payments or returns
                              arising from or in connection with the AssetMantle
                              Ecosystem, the Tokens or the proceeds of any sale
                              of Tokens, or to receive sums paid out of such
                              profits, income, or other payments or returns;
                            </li>
                            <li>
                              <i>(c)</i>you agree and acknowledge that no
                              regulatory authority has examined or approved of
                              these Terms, no action has been or will be taken
                              under the laws, regulatory requirements or rules
                              of any jurisdiction and the publication,
                              distribution or provision of these Terms to you
                              does not imply that the applicable laws,
                              regulatory requirements or rules have been
                              complied with;
                            </li>
                            <li>
                              <i>(d)</i>the provision of these Terms, any part
                              thereof or any copy thereof, or acceptance of the
                              same by you, is not prohibited or restricted by
                              the applicable laws, regulations or rules in your
                              jurisdiction, and where any restrictions in
                              relation to possession are applicable, you have
                              observed and complied with all such restrictions
                              at your own expense and without liability to the
                              AssetMantle Group;
                            </li>
                            <li>
                              <i>(e)</i>you have read and understood all of
                              these Terms including the Annex hereto; you are
                              not a Disqualified Person;
                            </li>
                            <li>
                              <i>(f)</i>
                              <div>
                                you have full power and capacity to accept these
                                Terms and perform all your obligations hereunder
                                and in the case where you are accepting these
                                Terms on behalf of a corporation:
                                <br />
                                <ol>
                                  <li>
                                    <i>(i)</i>such corporation is duly
                                    incorporated and validly existing under the
                                    applicable laws; and
                                  </li>
                                  <li>
                                    <i>(ii)</i>you are duly authorized to accept
                                    these Terms and procure the performance of
                                    obligations hereunder;
                                  </li>
                                </ol>
                              </div>
                            </li>
                            <li>
                              <i>(g)</i>if you are a natural person, you are of
                              sufficient age and capacity under the applicable
                              laws of the jurisdiction in which you reside and
                              the jurisdiction of which youare a citizen to
                              accept these Terms and perform all your
                              obligations hereunder;
                            </li>
                            <li>
                              <i>(h)</i>
                              <div>
                                you agree and acknowledge that the Tokens are
                                not to be construed, interpreted, classified or
                                treated as:
                                <br />
                                <ol>
                                  <li>
                                    <i>(i)</i>any kind of currency other than
                                    cryptocurrency;
                                  </li>
                                  <li>
                                    <i>(ii)</i>debentures, stocks or shares
                                    issued by any person or entity;
                                  </li>
                                  <li>
                                    <i>(iii)</i>rights, options or derivatives
                                    in respect of such debentures, stocks or
                                    shares;
                                  </li>
                                  <li>
                                    <i>(iv)</i>rights under a contract for
                                    differences or under any other contract the
                                    purpose or pretended purpose of which is to
                                    secure a profit or avoid a loss;
                                  </li>
                                  <li>
                                    <i>(v)</i>units in a collective investment
                                    scheme;
                                  </li>
                                  <li>
                                    <i>(vi)</i>units in a business trust;
                                  </li>
                                  <li>
                                    <i>(vii)</i>derivatives of units in a
                                    business trust; or
                                  </li>
                                  <li>
                                    <i>(viii)</i>any other security, class of
                                    securities or form of investment (whether
                                    regulated or otherwise);
                                  </li>
                                </ol>
                              </div>
                            </li>
                            <li>
                              <i>(i)</i>you have a basic degree of understanding
                              of the operation, functionality, usage, storage,
                              transmission mechanisms and other material
                              characteristics of cryptocurrencies,
                              blockchain-based software systems, cryptocurrency
                              wallets or other related token storage mechanisms,
                              blockchain technology, smart contract technology,
                              and Staking technology;
                            </li>
                            <li>
                              <i>(j)</i>these Terms constitute legal, valid and
                              binding obligations on you, enforceable in
                              accordance with its terms and your participation
                              in the AssetMantle Airdrop Campaign is not in
                              breach or contravention of any applicable law,
                              regulation or rule in your jurisdiction;
                            </li>
                            <li>
                              <i>(k)</i>you are not a citizen or resident of any
                              jurisdiction the laws, regulations or rules of
                              which prohibit, restrict, curtail, hinder, impair,
                              conflict or otherwise adversely affect your
                              participation in AssetMantle Airdrop Campaign;
                            </li>
                            <li>
                              <i>(l)</i>
                              <span>
                                no consent, approval, order or authorisation of,
                                or registration, qualification, designation,
                                declaration or filing with, any regulatory
                                authority in any jurisdiction (“
                                <strong>Approvals</strong>”) is required on your
                                part in connection with your participation in
                                AssetMantle Airdrop Campaign or, where any
                                Approvals are required, such Approvals have been
                                obtained and remain valid and in full force and
                                effect;
                              </span>
                            </li>
                            <li>
                              <i>(m)</i>
                              <div>
                                none of you or (and in the case where you are
                                accepting these Terms on behalf of a
                                corporation) any of your related corporations
                                (if any), any of your directors or officers, nor
                                any of your employees, agents or any other
                                person acting on behalf of your or any of your
                                related corporations is an individual or entity
                                that is, or is owned or controlled by an
                                individual or entity that:
                                <br />
                                <ol>
                                  <li>
                                    <i>(i)</i>is listed by the MAS as designated
                                    individuals or entities defined in the
                                    respective regulations promulgated under the
                                    Monetary Authority of Singapore Act (Chapter
                                    186) of Singapore, the United Nations Act
                                    (Chapter 339) of Singapore or the Terrorism
                                    (Suppression of Financing) Act (Chapter 325)
                                    of Singapore or such other law, regulation
                                    or rule as may be prescribed by the MAS from
                                    time to time;
                                  </li>
                                  <li>
                                    <i>(ii)</i>
                                    <span>
                                      is currently the subject of any sanction
                                      administered by the OFAC or any other
                                      United States government authority, is not
                                      designated as a "Specially Designated
                                      National" or "Blocked Person" by OFAC or
                                      subject to any similar sanctions or
                                      measures imposed or administered by the
                                      United Nations Security Council, the
                                      European Union, Her Majesty’s Treasury of
                                      the United Kingdom or similar sanctions
                                      administered or imposed by the government
                                      of Singapore or any other country
                                      (collectively, the "
                                      <strong>Sanctions</strong>");
                                    </span>
                                  </li>
                                  <li>
                                    <i>(iii)</i>
                                    <span>
                                      is located, organised or resident in a
                                      country or territory that is the subject
                                      of such Sanctions (including, without
                                      limitation, the Democratic People’s
                                      Republic of Korea, the Democratic Republic
                                      of Congo, Eritea, Iran, Libya, Somalia,
                                      South Sudan, Sudan and Yemen) (“
                                      <strong>Sanction Country</strong>”); or
                                    </span>
                                  </li>
                                  <li>
                                    <i>(iv)</i>has engaged in and/or is engaged
                                    in any dealings or transactions with any
                                    government, person, entity or project
                                    targeted by, or located in any country or
                                    territory, that at the time of the dealing
                                    or transaction is or was the subject of any
                                    Sanctions;
                                  </li>
                                </ol>
                              </div>
                            </li>
                            <li>
                              <i>(n)</i>
                              <span>
                                (in the case where you are accepting these Terms
                                on behalf of a corporation) the operations of
                                you and any of your related corporations, are
                                and have been conducted at all times in
                                compliance with applicable financial record
                                keeping and reporting requirements and money
                                laundering statutes in Singapore and of all
                                jurisdictions in which you and your related
                                corporations conduct business or operations, the
                                rules and regulations thereunder and any related
                                or similar rules, regulations or guidelines,
                                issued, administered or enforced by any
                                governmental agency or proceeding by or before
                                any court or governmental agency (collectively,
                                “<strong>Money Laundering Laws</strong>”) and no
                                action, suit or proceeding by or before any
                                court or governmental agency, authority or body
                                or any arbitrator involving you or your related
                                corporations with respect to Money Laundering
                                Laws is pending and, no such actions, suits or
                                proceedings are threatened or contemplated
                                against you or your related corporations;
                              </span>
                            </li>
                            <li>
                              <i>(o)</i>none of: (i) you; (ii) any person
                              controlling or controlled by you; (iii) if you are
                              a privatelyheld entity, any person having a
                              beneficial interest in you; or (iv) any person for
                              whom you are acting as agent or nominee in
                              connection with your participation in the
                              AssetMantle Airdrop Campaign, is a senior foreign
                              political figure, or any immediate family member
                              or close associate of a senior foreign political
                              figure, as such terms are defined below;
                            </li>
                            <li>
                              <i>(p)</i>if you are affiliated with a Foreign
                              Bank, or if you receive deposits from, make
                              payments on behalf of, or handle other financial
                              transactions related to a Foreign Bank, you
                              represent and warrant to the Campaign Organiser
                              that: (i) the Foreign Bank has a fixed address,
                              and not solely an electronic address, in a country
                              in which the Foreign Bank is authorised to conduct
                              banking activities; (ii) the Foreign Bank
                              maintains operating records related to its banking
                              activities; (iii) the Foreign Bank is subject to
                              inspection by the banking authority that licensed
                              the Foreign Bank to conduct its banking
                              activities; and (iv) the Foreign Bank does not
                              provide banking services to any other Foreign Bank
                              that does not have a physical presence in any
                              country and that is not a regulated affiliate;
                            </li>
                            <li>
                              <i>(q)</i>you are participating in the AssetMantle
                              Airdrop Campaign as principal and for your own
                              benefit and you are not acting on the instructions
                              of, or as nominee or agent for or on behalf of any
                              other person;
                            </li>
                            <li>
                              <i>(r)</i>you are not participating in AssetMantle
                              Airdrop Campaign with a view to obtaining or using
                              any Tokens or Supported Tokens for any illegal
                              purpose;
                            </li>
                            <li>
                              <i>(s)</i>you bear the sole responsibility to
                              determine what tax implications (if any) your
                              participation in the AssetMantle Airdrop Campaign
                              may have for you, and agree not to hold the
                              Campaign Organiser or any other person liable for
                              any tax liability associated with or arising
                              therefrom;
                            </li>
                            <li>
                              <i>(t)</i>you agree and acknowledge that none of
                              the members of the AssetMantle Group (including
                              the Campaign Organiser) is liable for any direct,
                              indirect, special, incidental, consequential or
                              other losses of any kind, in tort, contract or
                              otherwise (including but not limited to loss of
                              revenue, income or profits, and loss of use
                              ordata), arising out of or in connection with any
                              acceptance of or reliance on these Terms or any
                              part thereof by you;
                            </li>
                            <li>
                              <i>(u)</i>all the documents and information
                              furnished by you to the Campaign Organiser (if
                              any) pursuant to these Terms are true, accurate
                              and complete in all respects, and there is no
                              matter, event, circumstance or any other
                              information which has arisen which would make any
                              documents and information provided misleading or
                              incomplete, or any fact or information the
                              omission of which would make any documents and
                              information provided misleading or incomplete;
                            </li>
                            <li>
                              <i>(v)</i>you waive the right to participate in a
                              class action lawsuit or a class wide arbitration
                              against any member of the AssetMantle Group
                              (including the Campaign Organiser), the
                              Indemnified Persons and/or any person involved in
                              the AssetMantle Airdrop Campaign; and
                            </li>
                            <li>
                              <i>(w)</i>all of the above representations and
                              warranties are true, complete, accurate and not
                              misleading from the time of your access to and/or
                              acceptance of these Terms and notwithstanding the
                              conclusion of the AssetMantle Airdrop Campaign.
                            </li>
                          </ol>
                        </div>
                      </li>
                      <li>
                        <i>3.2.</i>
                        <div>
                          The AssetMantle Group (including the Campaign
                          Organiser) does not make, and hereby disclaims, any
                          representation or warranty in any form whatsoever,
                          including any representation or warranty in relation
                          to:
                          <br />
                          <ol>
                            <li>
                              <i>(a)</i>the information set out on the Website
                              or any other place;
                            </li>
                            <li>
                              <i>(b)</i>the Campaign Organiser; and
                            </li>
                            <li>
                              <i>(c)</i>the AssetMantle Airdrop Campaign.
                            </li>
                          </ol>
                        </div>
                      </li>
                      <li>
                        <i>3.3</i>You undertake to notify the Campaign Organiser
                        of any change in the documents and information provided
                        by you to the Campaign Organiser pursuant to these Terms
                        (if any) and in the absence of any notification in
                        writing notifying of any change, the Campaign Organiser
                        is entitled to assume that the documents and information
                        provided by you remain true, correct, not misleading and
                        unchanged.
                      </li>
                    </ol>
                  </div>
                </li>
                <li>
                  <i>4.</i>
                  <div>
                    <strong>DISCLAIMERS</strong>
                    <br />
                    <ol>
                      <li>
                        <i>4.1</i>
                        <div>
                          To the maximum extent permitted by all applicable
                          laws, regulations and rules and except as otherwise
                          provided in these Terms, the AssetMantle Group
                          (including the Campaign Organiser) hereby expressly
                          disclaims its liability and shall in no case be liable
                          to you or any person for:
                          <br />
                          <ol>
                            <li>
                              <i>(a)</i>abortion of the AssetMantle Airdrop
                              Campaign and/or the Project;
                            </li>
                            <li>
                              <i>(b)</i>failure, malfunction or breakdown of, or
                              disruption to, the operations of the Campaign
                              Organiser, the AssetMantle Ecosystem, any
                              Supported Staking Network, StakingNode or any
                              other technology (including but not limited to
                              smart contract technology), due to any reason,
                              including but not limited to occurrences of hacks,
                              mining attacks (including but not limited to
                              double-spend attacks, majority mining power
                              attacks and “selfishmining” attacks),
                              cyber-attacks, distributed denials of service,
                              errors, vulnerabilities, defects, flaws in
                              programming or source code or otherwise,
                              regardless of when such failure, malfunction,
                              breakdown, or disruption occurs;
                            </li>
                            <li>
                              <i>(c)</i>any virus, error, bug, flaw, defect or
                              otherwise adversely affecting the AssetMantle
                              Airdrop Campaign or your participation in
                              AssetMantle Airdrop Campaign;
                            </li>
                            <li>
                              <i>(d)</i>failure to disclose information relating
                              to the AssetMantle Airdrop Campaign at the request
                              of the Campaign Organiser;
                            </li>
                            <li>
                              <i>(e)</i>any prohibition, restriction or
                              regulation by any government or regulatory
                              authority in any jurisdiction applicable to the
                              AssetMantle Airdrop Campaign or your participation
                              in AssetMantle Airdrop Campaign;
                            </li>
                            <li>
                              <i>(f)</i>any risks associated with your
                              participation in the AssetMantle Airdrop Campaign,
                              the AssetMantle Group (including the Campaign
                              Organiser) and/or the AssetMantle Ecosystem; and
                            </li>
                            <li>
                              <i>(g)</i>all other risks, direct, indirect or
                              ancillary, whether in relation to your
                              participation in AssetMantle Airdrop Campaign or
                              the AssetMantle Group (including the Campaign
                              Organiser) and/or the AssetMantle Ecosystem which
                              are not specifically or explicitly contained in or
                              stated in these Terms.
                            </li>
                          </ol>
                        </div>
                      </li>
                      <li>
                        <i>4.2</i>The Campaign Organiser reserves the right, in
                        its sole and absolute discretion, to adopt
                        organizational, technical or other measures to ensure
                        that the AssetMantle Airdrop Campaign be unavailable to
                        certain persons that it may determine are ineligible to
                        participate in AssetMantle Airdrop Campaign, and none of
                        the members of the AssetMantle Group (including the
                        Campaign Organiser) and the Indemnified Persons shall be
                        liable for any indirect, special, incidental,
                        consequential or other losses of any kind, in tort,
                        contract or otherwise (including but not limited to loss
                        of revenue, income or profits, and loss of use or data),
                        arising out of or in connection with any consequences of
                        such prohibition.
                      </li>
                      <li>
                        <i>4.3</i>Notwithstanding your acceptance of these Terms
                        or anything to the contrary herein, the Campaign
                        Organiser reserves the right, for any reason whatsoever
                        (without having to account for such reason(s)) and in
                        its sole and absolute discretion, to reject your
                        participation in AssetMantle Airdrop Campaign and none
                        of the members of the AssetMantle Group (including the
                        Campaign Organiser) and the Indemnified Persons shall be
                        liable for any indirect, special, incidental,
                        consequential or other losses of any kind, in tort,
                        contract or otherwise (including but not limited to loss
                        of revenue, income or profits, and loss of use or data),
                        arising out of or in connection with any consequences of
                        such rejection.
                      </li>
                      <li>
                        <i>4.4</i>The Campaign Organiser reserves the right, in
                        its sole and absolute discretion, to abort the
                        AssetMantle Airdrop Campaign and/or the Project at any
                        time after your acceptance of these Terms. In the event
                        of such abortion, you acknowledge and agree that none of
                        the members of the AssetMantle Group (including the
                        Campaign Organiser) shall have any obligation in any
                        form or manner whatsoever to you, and none of the the
                        members of the AssetMantle Group (including the Campaign
                        Organiser) and the Indemnified Persons shall be liable
                        for any indirect, special, incidental, consequential or
                        other losses of any kind, in tort, contract or otherwise
                        (including but not limited to loss of revenue, income or
                        profits, and loss of use or data), arising out of or in
                        connection with any consequences of such abortion.
                      </li>
                    </ol>
                  </div>
                </li>
                <li>
                  <i>5</i>
                  <div>
                    <strong>LIMITATION OF LIABILITY AND INDEMNIFICATION</strong>
                    <br />
                    <ol>
                      <li>
                        <i>5.1</i>
                        <div>
                          To the maximum extent permitted by the applicable
                          laws, regulations and rules:
                          <br />
                          <ol>
                            <li>
                              <i>(a)</i>the AssetMantle Group (including the
                              Campaign Organiser) and the Indemnified Persons
                              shall not be liable for any indirect, special,
                              incidental, consequential or other losses of any
                              kind, in tort, contract or otherwise (including
                              but not limited to loss of revenue, income or
                              profits, and loss of use or data), arising out of
                              or in connection with your participation in
                              AssetMantle Airdrop Campaign; and
                            </li>
                            <li>
                              <i>(b)</i>you hereby agree to waive all rights to
                              assert any claims against the AssetMantle Group
                              (including the Campaign Organiser) and/or the
                              Indemnified Persons under such applicable laws,
                              regulations and rules.
                            </li>
                          </ol>
                        </div>
                      </li>
                      <li>
                        <i>5.2</i>To the maximum extent permitted by the
                        applicable laws, regulations and rules, you shall
                        indemnify, defend, and hold the AssetMantle Group
                        (including the Campaign Organiser)and/or the Indemnified
                        Persons harmless from and against any and all claims,
                        damages, losses, suits, actions, demands, proceedings,
                        expenses, and/or liabilities (including but not limited
                        to reasonable legal fees incurred and/or those necessary
                        to successfully establish the right to indemnification)
                        filed/incurred by any third party against any member of
                        the AssetMantle Group (including the Campaign Organiser)
                        or the Indemnified Persons arising out of a breach by
                        you of any warranty, representation, or obligation
                        hereunder.
                      </li>
                    </ol>
                  </div>
                </li>
                <li>
                  <i>6</i>
                  <div>
                    <strong>NO ASSIGNMENT</strong>
                    <br />
                    <p>
                      The Campaign Organiser may, at its sole and absolute
                      discretion, assign its rights and/or delegate its duties
                      under these Terms. You may not assign your rights or
                      delegate your duties, and any assignment or delegation
                      without the written consent of the Campaign Organiser,
                      which the Campaign Organiser may withhold at its sole and
                      absolute discretion, shall be void. Subject to these
                      Terms, only you and no other person shall have the right
                      to any claim against the Campaign Organiser in connection
                      with your participation in AssetMantle Airdrop Campaign.
                      You shall not assign, trade or transfer, or attempt to
                      assign, trade or transfer, your right to any such claim.
                      Any such assignment or transfer shall not impose any
                      obligation or liability of the Campaign Organiser to the
                      assignee or transferee.
                    </p>
                  </div>
                </li>
                <li>
                  <i>7.</i>
                  <div>
                    <strong>INTELLECTUAL PROPERTY RIGHTS</strong>
                    <br />
                    <ol>
                      <li>
                        <i>7.1</i>These Terms shall not entitle you to any
                        intellectual property rights, including the rights in
                        relation to the use, for any purpose, of any
                        information, image, user interface, logos, trademarks,
                        trade names, Internet domain names or copyright in
                        connection with your participation in the AssetMantle
                        Airdrop Campaign, the Project, the Website, the
                        AssetMantle Group, the Tokens and the AssetMantle
                        Ecosystem.
                      </li>
                      <li>
                        <i>7.2</i>There are no implied licenses under these
                        Terms, and any rights not expressly granted to you
                        hereunder are reserved by the Campaign Organiser
                      </li>
                    </ol>
                  </div>
                </li>
                <li>
                  <i>8.</i>
                  <div>
                    <strong>INTELLECTUAL PROPERTY RIGHTS</strong>
                    <br />
                    <ol>
                      <li>
                        <i>8.1</i>
                        <span>
                          The pages of the Website and/or Channels may contain
                          links to third-party websites and services which are
                          owned and operated by third parties (“
                          <strong>
                            Third Party Online Products and Service(s)
                          </strong>
                          ”). These links are provided for your information and
                          convenience only, and are NOT an endorsement by the
                          Campaign Organiser, its directors, officers,
                          employees, agents, successors, and permitted assignees
                          of the contents of such linked websites or third
                          parties, over which none of the aforementioned
                          entities have any control over. Your access to and use
                          of any Third Party Online Products and Service is
                          governed by the terms, conditions, disclaimers and
                          notices found on each such website or in connection
                          with such services. The Campaign Organiser has not
                          verified, will not, and is under no obligation to
                          verify the accuracy, suitability or completeness of
                          the contents on such Third Party Online Products and
                          Services, and the Campaign Organiser does not control,
                          endorse, warrant, promote, recommend or in any way
                          assume responsibility or liability for any services or
                          products that may be offered by or accessed through
                          such Third Party Online Products and Services or the
                          operators of them, or the suitability or quality of
                          any of such Third Party Online Products and Services.
                          In addition, the Campaign Organiser does not warrant
                          that such Third Party Online Products and Services or
                          the software, data or files contained in, accessed via
                          or linked or referred to in, such Third Party Online
                          Products and Services are free of viruses (or other
                          deleterious data or programs) or defects or that use
                          of such Third Party Online Products and Services will
                          not cause harm or that they conform or will conform
                          with any user expectations. Furthermore, the Campaign
                          Organiser is not responsible for maintaining any
                          materials referenced from another website, and makes
                          no warranties for that website or service in such
                          context.
                        </span>
                      </li>
                      <li>
                        <i>8.2</i>
                        <div>
                          To the maximum extent permitted by all applicable
                          laws, regulations and rules, none of the members of
                          the AssetMantle Group (including the Campaign
                          Organiser) shall be liable for any damage or loss of
                          any kind, whether direct or indirectly, or in tort,
                          contract or otherwise (including but not limited to
                          loss of revenue, income or profits, and loss of use or
                          data) or any other impact, directly or indirectly
                          resulting from or relating to:
                          <br />
                          <ol>
                            <li>
                              <i>(a)</i>the access to and/or use of any content,
                              goods or services available on, from or through
                              any Third Party Online Product and Service;
                            </li>
                            <li>
                              <i>(b)</i>the inability to access or the
                              malfunction of any Third Party Online Product and
                              Service;
                            </li>
                            <li>
                              <i>(c)</i>the loss, use or misuse of, or
                              unauthorized access to, any data or personal or
                              other financial information provided by you to any
                              Third Party Online Product and Service;
                            </li>
                            <li>
                              <i>(d)</i>the failure by any Third Party Online
                              Product and Service to complete any transaction
                              for any reason;
                            </li>
                            <li>
                              <i>(e)</i>any failure or break of any Third Party
                              Online Product and Service’s security protections,
                              mechanisms, protocol and/or procedures; and/or
                            </li>
                            <li>
                              <i>(f)</i>the direct or indirect use of any Third
                              Party Online Service or any other website or
                              service by other persons.
                            </li>
                          </ol>
                        </div>
                      </li>
                    </ol>
                  </div>
                </li>
                <li>
                  <i>9.</i>
                  <div>
                    <strong>NO WAIVER</strong>
                    <br />
                    <ol>
                      <li>
                        <i>9.1</i>Any failure of the Campaign Organiser to
                        enforce these Terms or to assert any right(s), claim(s)
                        or causes of action against you under these Terms shall
                        not be construed as a waiver of the right of the
                        Campaign Organiser to assert any right(s), claim(s) or
                        causes of action against you.
                      </li>
                      <li>
                        <i>9.2</i>No provision of these Terms shall be
                        considered waived unless such waiver is in writing and
                        signed by the Party that benefits from the enforcement
                        of such provision. No waiver of any provision in these
                        Terms, however, will be deemed a waiver of a subsequent
                        breach of such provision or a waiver of a similar
                        provision. In addition, a waiver of any breach or a
                        failure to enforce any term or condition of these Terms
                        will not in any way affect, limit, or waive a Party’s
                        rights hereunder at any time to enforce strict
                        compliance thereafter with every term and condition
                        hereof.
                      </li>
                    </ol>
                  </div>
                </li>
                <li>
                  <i>10.</i>
                  <div>
                    <strong>ENTIRE AGREEMENT</strong>
                    <br />
                    <ol>
                      <li>
                        <i>10.1</i>These Terms contain the entire agreement and
                        the understanding between the Parties and supersedes all
                        prior agreements, understandings or arrangements (both
                        oral and written) in relation to your participation in
                        the AssetMantle Airdrop Campaign.
                      </li>
                      <li>
                        <i>10.2</i>In the event that the Campaign Organiser
                        discovers that you, in your participation in the
                        AssetMantle Airdrop Campaign, have engaged in unfair,
                        excessive or abusive usage or conduct, the Campaign
                        Organiser reserves the right to take such actions as may
                        be necessary, to the fullest extent possible under law,
                        to protect the Campaign Organiser from losses, damages,
                        harm or degradation of any form and manner.
                      </li>
                    </ol>
                  </div>
                </li>
                <li>
                  <i>11.</i>
                  <div>
                    <strong>TAXES</strong>
                    <br />
                    <ol>
                      <li>
                        <i>11.1</i>You shall be responsible for determining any
                        tax applicable and payable to any taxation authority in
                        respect of your participation in AssetMantle Airdrop
                        Campaign (“Payable Tax”) and declaring, withholding,
                        collecting, reporting and remitting the correct amount
                        of Payable Tax to the appropriate tax authorities. You
                        shall be solely liable for all penalties, claims, fines,
                        punishments, or other liabilities arising from the
                        non-fulfilment or non-performance to any extent of any
                        of your obligations in relation to the Payable Tax.
                      </li>
                      <li>
                        <i>11.2</i>The Campaign Organiser shall not be
                        responsible for determining any Payable Tax and
                        declaring, withholding, collecting, reporting and
                        remitting the correct amount of Payable Tax to the
                        appropriate tax authorities.
                      </li>
                    </ol>
                  </div>
                </li>
                <li>
                  <i>12.</i>
                  <div>
                    <strong>GOVERNING LAW AND DISPUTE RESOLUTION</strong>
                    <br />
                    <ol>
                      <li>
                        <i>12.1</i>This Agreement is governed by the laws of
                        Singapore, without regard to conflict of law rules or
                        principles (whether of Singapore or any other
                        jurisdiction) that would cause the application of the
                        laws of any other jurisdiction.
                      </li>
                      <li>
                        <i>12.2</i>Any dispute arising out of or in connection
                        with these Terms, including any question regarding its
                        existence, validity or termination, shall be referred to
                        and shall be referred to and finally resolved by
                        arbitration administered by the Singapore International
                        Arbitration Centre in accordance with the Arbitration
                        Rules of the Singapore International Arbitration Centre
                        for the time being in force, which rules are deemed to
                        be incorporated by reference in this paragraph. The seat
                        of the arbitration shall be Singapore. The tribunal
                        shall consist of 1 arbitrator. The language of the
                        arbitration shall be English.
                      </li>
                      <li>
                        <i>12.3</i>The arbitrator does not have the authority to
                        conduct a class arbitration or a representative or class
                        action, which is prohibited by this Agreement. The
                        arbitrator may only conduct an individual arbitration
                        and may not consolidate more than one individual’s
                        claims, preside over any type of class or representative
                        proceeding or preside over any proceeding involving more
                        than one individual.
                      </li>
                      <li>
                        <i>12.4</i>
                        <span>
                          Prior to commencing arbitration proceedings in
                          accordance with this Clause{" "}
                          <strong>Error! Reference source not found.</strong>,
                          each Party will notify the other Party in writing of
                          any Dispute, so that the Parties can attempt in good
                          faith to resolve the Dispute informally. Notice to the
                          Seller shall be sent by e-mail to the Seller at [•] or
                          such other email address as may be notified to the
                          Buyer from time to time. Notice to the Buyer shall be
                          sent by email to any email address provided by the
                          Buyer in connection with its purchase of $MNTL or use
                          of the AssetMantle platform or Services. Such notice
                          must include (i) the Buyer's full name, postal
                          address, email address and telephone number, (ii) a
                          full and sufficient description of the nature or basis
                          of the Dispute, and (iii) the specific relief sought.
                          If the Parties cannot agree how to resolve the Dispute
                          within thirty (30) calendar days after the date the
                          notice is received by the applicable Party, then
                          either Party may, as appropriate and in accordance
                          with this Clause{" "}
                          <strong>Error! Reference source not found.</strong>,
                          commence an arbitration proceeding.
                        </span>
                      </li>
                      <li>
                        <i>12.5</i>Each Party agrees to keep all matters
                        relating to arbitration proceedings, including the
                        arbitral awards, confidential, except as is otherwise
                        required by court order or as is necessary to confirm,
                        set aside or enforce the arbitral award and for
                        disclosure in confidence to each Party’s respective
                        legal, financial or other professional advisors.
                      </li>
                    </ol>
                  </div>
                </li>
                <li>
                  <i>13.</i>
                  <div>
                    <strong>CONTRACTS (RIGHTS OF THIRD PARTIES) ACT</strong>
                    <br />
                    <ol>
                      <li>
                        <i>13.1</i>Subject to Paragraph 13.2, the Contracts
                        (Rights of Third Parties) Act (Chapter 53B) of , as may
                        be modified, amended or supplemented from time to time,
                        shall apply to these Terms.
                      </li>
                      <li>
                        <i>13.2</i>Save for the Indemnified Persons who shall
                        have rights to the extent accorded thereto under these
                        Terms, a person who is not a Party shall not have any
                        rights whatsoever under these Terms or to enforce these
                        Terms.
                      </li>
                    </ol>
                  </div>
                </li>
                <li>
                  <i>14.</i>
                  <div>
                    <strong>SEVERANCE AND PARTIAL INVALIDITY</strong>
                    <br />
                    <ol>
                      <li>
                        <i>14.1</i>If any of these Terms is rendered void,
                        illegal or unenforceable by any legislation to which it
                        is subject, it shall be rendered void, illegal or
                        unenforceable to that extent and no further and, for the
                        avoidance of doubt, the rest of these Terms shall
                        continue to be valid and in full force and effect and
                        shall in no way be affected, impaired or invalidated,
                        and the Parties hereto shall use their commercially
                        reasonable efforts to find and employ an alternative
                        means to achieve the same or substantially the same
                        result as that contemplated by such term, provision,
                        covenant or restriction. It is hereby stipulated and
                        declared to be the intention of the Parties that they
                        would have executed the remaining terms, provisions,
                        covenants and restrictions without including any of such
                        that may be hereafter declared invalid, illegal, void or
                        unenforceable.
                      </li>
                      <li>
                        <i>14.2</i>The illegality, invalidity or
                        unenforceability of any provision of these Terms under
                        the law of any jurisdiction shall not affect its
                        legality, validity or enforceability under the law of
                        any other jurisdiction nor the legality, validity or
                        enforceability of any other provision.
                      </li>
                    </ol>
                  </div>
                </li>
              </ol>

              <h3>ANNEX</h3>
              <h3>DEFINITIONS</h3>

              <ol>
                <li>
                  <i>1.</i>
                  <div>
                    <p>
                      In these Terms, the following words and expressions shall,
                      where not inconsistent with the context, have the
                      following meanings respectively:
                    </p>
                    <p>
                      “<strong>Affiliate</strong>” means with respect to any
                      person, any other person directly or indirectly
                      controlling, controlled by or under common control with
                      such person.
                    </p>
                    <p>
                      “<b>Approvals</b>” has the meaning ascribed to it in
                      Paragraph 3.1(m)
                    </p>
                    <p>
                      “<b>AssetMantle Airdrop Campaign</b>” has the meaning
                      ascribed to it in Paragraph 1.1.
                    </p>
                    <p>
                      “<b>AssetMantle Airdrop Snapshot Date</b>” means any such
                      date as may be determined by the Campaign Organiser.
                    </p>
                    <p>
                      “<b>AssetMantle Ecosystem</b>” means the network built on
                      the AssetMantle protocol as part of the Project, to be
                      developed by the Campaign Organiser and/or its affiliate,
                      using blockchain technology.
                    </p>
                    <p>
                      “<b>ATOM Token</b>” means the Supported Token of the
                      Cosmos Network.
                    </p>
                    <p>
                      “<b>close associate</b>” in relation to a senior foreign
                      political figure means a person who is widely and publicly
                      known to maintain an unusually close relationship with
                      such senior foreign political figure, and includes a
                      person who is in a position to conduct substantial
                      domestic and international financial transactions on
                      behalf of such senior foreign political figure.
                    </p>
                    <p>
                      “<b>Cosmos Network</b>” means the Cosmos Network, being a
                      Supported Staking Network as described in the following
                      weblink:{" "}
                      <a
                        href="https://cosmos.network/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://cosmos.network/
                      </a>{" "}
                      (last accessed on 21 October 2020).
                    </p>
                    <p>
                      “<b>Delegated Staking</b>” in relation to Supported
                      Token(s) and its associated Staking Node, means the
                      process whereby a holder of Supported Token(s) – through
                      the use of Supported Staking Application and without such
                      Staking Node or operator thereof being placed in custody,
                      possession or control of such Supported Token(s) – effects
                      Staking of such Supported Token(s) with such Staking Node
                      and in connection therewith:
                    </p>
                    <div>
                      <ol>
                        <li>
                          <i>(a)</i>restricts the transfer of such Supported
                          Token(s) for the duration of such Staking; and/or
                        </li>
                        <li>
                          <i>(b)</i>voluntarily subjects such Supported Token(s)
                          to Stake Slashing for the duration of such Staking,
                        </li>
                      </ol>
                    </div>
                    <p>
                      and “<b>Delegate</b>” and “<b>Delegation</b>” shall refer
                      to Delegator delegating Supported Token(s) for Staking as
                      described in the foregoing.
                    </p>
                    <p>
                      “<b>Dispute</b>” means any dispute between the Parties
                      arising out of or in relation to these Terms.
                    </p>
                    <p>
                      “<b>Disqualified Person</b>” has the meaning ascribed to
                      it in Paragraph 2.2.
                    </p>
                    <p>
                      “<b>Dust Amount</b>” has the meaning ascribed to it in
                      Paragraph 1.2;
                    </p>
                    <p>
                      “<b>Dust Transfer Indication</b>” has the meaning ascribed
                      to it in Paragraph 1.2.
                    </p>
                    <p>
                      “<b>Eligible Participants</b>” has the meaning ascribed to
                      it in Paragraph 1.1;
                    </p>
                    <p>
                      “<b>Foreign Bank</b>” means a non-United States of America
                      banking institution.
                    </p>
                    <p>
                      “<b>immediate family</b>” in relation to a senior foreign
                      political figure includes such figure’s parents, siblings,
                      spouse, children and in-laws.
                    </p>
                    <p>
                      “<b>Indemnified Persons</b>” means each of the Campaign
                      Organiser’s and AssetMantle Affiliate’s subsidiaries,
                      related companies, affiliates, directors, officers,
                      employees, agents, service providers, successors, and
                      permitted assignees.
                    </p>
                    <p>
                      “<b>MAS</b>” means the Monetary Authority of Singapore.
                    </p>
                    <p>
                      “<b>Money Laundering Laws</b>” has the meaning ascribed to
                      it in Paragraph 3.1(o).
                    </p>
                    <p>
                      “<b>OFAC</b>” means the United States Office of Foreign
                      Assets Control of the United States Department of the
                      Treasury.
                    </p>
                    <p>
                      “<b>Payable Tax</b>” has the meaning ascribed to it in
                      Paragraph 11.1.
                    </p>
                    <p>
                      “<b>Project</b>” means the AssetMantle project as
                      described on the Website.
                    </p>
                    <p>
                      “<b>Sanction Country</b>” has the meaning ascribed to it
                      in Paragraph 3.1(n)(iii).
                    </p>
                    <p>
                      “<b>Sanctions</b>” has the meaning ascribed to it in
                      Paragraph 3.1(n)(ii).
                    </p>
                    <p>
                      “<b>Staking</b>” in relation to Supported Token(s) and its
                      associated Supported Staking Network, means the deployment
                      of such Supported Token(s) in association with a Staking
                      Node in accordance with the rules of such Supported
                      Staking Network, and “Stake” shall be construed
                      accordingly;
                    </p>
                    <p>
                      <b>“Staking Node</b>” in relation to Supported Token(s)
                      and its associated Supported Staking Network, means a
                      network node with Supported Token(s) deployed in
                      association therewith that is capable of participating in
                      the consensus process of the Supported Staking Network by
                      performing Supported Staking Network Functions, in
                      accordance with the rules of such Supported Staking
                      Network;
                    </p>
                    <p>
                      <b>“Staking Rewards</b>” means the rewards attributable to
                      a Staking Node for performing Supported Staking Network
                      Functions, in accordance with the rules of such Supported
                      Staking Network;
                    </p>
                    <p>
                      <b>“senior foreign political figure</b>” means a senior
                      official in the executive, legislative, administrative,
                      military or judicial branch of a government (whether
                      elected or not), a senior official of a major political
                      party, or a senior executive of a foreign government-owned
                      corporation. It includes any corporation, business or
                      other entity that has been formed by, or for the benefit
                      of, a senior foreign political figure.
                    </p>
                    <p>
                      <b>“Supported Staking Application</b>” in relation to
                      Supported Token(s), means the software application that
                      facilitates and/or supports Staking of such Supported
                      Token(s).
                    </p>
                    <p>
                      “<b>Supported Staking Network</b>” means any one of the
                      following Supported Staking Network:
                    </p>

                    <ol>
                      <li>
                        <i>(a)</i>Cosmos Network;
                      </li>
                      <li>
                        <i>(b)</i>Terra (LUNA);
                      </li>
                      <li>
                        <i>(c)</i>Iris Network (IRIS);
                      </li>
                      <li>
                        <i>(d)</i>Polkadot (DOT);
                      </li>
                      <li>
                        <i>(e)</i>Matic Network (MATIC);
                      </li>
                      <li>
                        <i>(f)</i>Kava (KAVA);Tezos (XTZ)
                      </li>
                      <li>
                        <i>(g)</i>in relation to a Supported Token, means the
                        digital ledger network to which such Supported Token is
                        native and which supports Staking of such Supported
                        Token and has rules prescribed for Staking.
                      </li>
                    </ol>
                    <p>
                      <b>“Supported Staking Network Functions</b>” means
                      transaction validation or such other functions that if
                      performed by a Staking Node would have such Staking Node
                      be attributed with Staking Rewards, in accordance with the
                      rules of such Supported Staking Network.
                    </p>
                    <p>
                      <b>“Supported Token</b>” means :
                    </p>
                    <ol>
                      <li>
                        <i>(a)</i>in relation to the Cosmos Network, the ATOM
                        Token;
                      </li>
                      <li>
                        <i>(b)</i>in relation to a Supported Staking Network
                        other than the Cosmos Network, such Supported Token that
                        is native to such Supported Staking Network (e.g. LUNA,
                        IRIS, DOT, MATIC, KAVA, XTZ).
                      </li>
                    </ol>
                    <p>
                      “<b>Supported Token Designated Address</b>” means, in
                      relation to a Supported Token, means such distributed
                      ledger address as may be designated by the Campaign
                      Organiser for the receipt of such Supported Token.
                    </p>
                    <p>
                      “<b>Third Party Online Products and Service(s)</b>” has
                      the meaning ascribed to it in Paragraph 8.1.
                    </p>
                    <p>
                      “<b>Tokens</b>” means the XPRT Tokens (XPRT), a native
                      cryptographic token created and issued by the Campaign
                      Organiser to be used as part of the AssetMantle protocol
                      as described on the Website, and “Token” shall be
                      construed accordingly.
                    </p>
                    <p>
                      “<b>Website</b>” means the website of the Campaign
                      Organiser which is accessible at{" "}
                      <a
                        href="https://assetmantle.one/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://assetmantle.one/
                      </a>
                      .
                    </p>
                  </div>
                </li>
                <li>
                  <i>2.</i>
                  <div>
                    In these Terms, a reference to:
                    <br />
                    <ol>
                      <li>
                        <i>(a)</i>the Campaign Organiser includes a reference to
                        its duly authorized agents and/or delegates;
                      </li>
                      <li>
                        <i>(b)</i>a person includes a reference to any
                        individual, body corporate, unincorporated association
                        or partnership;
                      </li>
                      <li>
                        <i>(c)</i>an agreement or other document is a reference
                        to that agreement or document as from time to time
                        supplemented or amended;
                      </li>
                      <li>
                        <i>(d)</i>the masculine gender includes the feminine and
                        neuter genders and vice versa;
                      </li>
                      <li>
                        <i>(e)</i>the singular includes the plural and vice
                        versa; and
                      </li>
                      <li>
                        <i>(f)</i>any law or regulation is a reference to that
                        law or regulation as amended from time to time and,
                        where the same has been repealed, to any re-enactment or
                        replacement of the same.
                      </li>
                    </ol>
                  </div>
                </li>
              </ol>

              <div className="modal_container__body_scrollDown">
                <button
                  ref={scrollBottomButton}
                  onClick={() =>
                    modalBody.current.scrollTo(
                      0,
                      modalBody.current.scrollHeight
                    )
                  }
                >
                  <AiOutlineArrowDown />
                </button>
              </div>

              <div className="modal_container__button" id="acceptDeny">
                <button
                  className="modal_container__button_close"
                  onClick={() => closeModal(false)}
                >
                  Deny
                </button>
                <a
                  className="modal_container__button_close"
                  href="/osmosis-claim"
                >
                  Accept And Continue
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  z-index: 500;
  background-color: hsla(0, 0%, 6%, 0.5);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  .modal___fo_bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .modal__sc {
    height: 100%;
    width: min(100%, 1000px);
    position: relative;
    z-index: 3;
    background-color: var(--dark-xs);
    padding: 40px;
    border-radius: 20px;
    @media (max-width: 548px) {
      padding: 20px;
    }
    &_close {
      font: var(--h2);
      color: var(--yellow);
      position: absolute;
      top: 20px;
      right: 30px;
      @media (max-width: 548px) {
        top: 10px;
        right: 20px;
      }
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
  .modal_container {
    z-index: 7;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    &__title {
      font: var(--h2);
      color: var(--gray);
      margin: 0;
      text-align: center;
      padding-bottom: 0;
      .yellow {
        color: var(--yellow);
      }
    }
    &__body {
      height: 100%;
      overflow-y: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
      /* position: relative; */
      &::-webkit-scrollbar {
        display: none;
      }
      &_scrollDown {
        position: sticky;
        bottom: 10px;
        right: 10px;
        background-color: var(--dark-s);
        border-radius: 50%;
        color: var(--yellow);
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        button {
          color: var(--yellow);
          text-decoration: none;
          position: relative;
          padding-top: 2px;
          background: transparent;
          border: none;
          outline: none;
          font: var(--p-m);
          &::before {
            content: "Scroll to bottom";
            position: absolute;
            top: -190%;
            left: -530%;
            font: var(--p-s);
            background-color: var(--dark-s);
            padding: 12px 15px;
            border-radius: 12px;
            width: max-content;
            display: none;
          }
          &:hover {
            &::before {
              display: inline;
            }
          }
        }
      }
      &_dis {
        background-color: var(--dark-s);
        color: var(--gray);
        font: var(--p-m);
        border-radius: 12px;
        padding: 24px;
      }
    }
    p {
      font: var(--p-m);
      color: var(--gray-deep);
      padding: 12px 0;
      strong,
      b {
        font: 600 var(--p-m);
        color: var(--gray);
      }
      a {
        color: var(--yellow);
        text-decoration: none;
      }
      svg {
        cursor: pointer;
      }
    }
    ol,
    ul {
      font: var(--p-m);
      color: var(--gray-deep);
      padding: 12px 0;
      list-style-type: none;
      list-style-position: inside;
      li {
        i {
          padding-right: 12px;
          color: var(--gray);
        }
        display: flex;
        padding: 6px 0;
        strong {
          font: 600 var(--p-m);
          color: var(--gray);
        }
      }
    }
    h3 {
      color: var(--gray);
      text-align: center;
      padding: 12px;
    }
    &__button {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 24px;
      &_close {
        padding: 10px 22.5px 12px;
        display: inline;
        font: 600 var(--p-m);
        color: var(--dark-m);
        text-transform: capitalize;
        background: var(--yellow-gradient-bg);
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
          inset -4px -4px 8px rgba(0, 0, 0, 0.25), inset 4px 4px 8px #ffc942;
        border-radius: 12px;
        transition: all ease-in-out 100ms;
        cursor: pointer;
        color: var(--dark-m);
        text-decoration: none;
        border: none;
        outline: none;
        &:hover,
        &:focus {
          box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
        }
        @media (max-width: 548px) {
          width: 100%;
        }
      }
    }
  }
`;
