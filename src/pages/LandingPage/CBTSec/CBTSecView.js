// @flow
import React from "react";
import { css } from "aphrodite";
import { Images } from "../../../theme";
import styles from "./CBTSecStyles";
export default function CBTSecView(props) {
  return (
    <section
      id="cbt"
      className={`pt-5 mt-5 ${css([
        // styles.marginBottom,
        styles.CBTSec,
        // AppStyles.pxy_12,
      ])}`}
    >
      <div className={`container `}>
        <div className={css(styles.CBTInnerCont)}>
          <div className={css(styles.CBTTextCont)}>
            <div className={css(styles.CBTHeading)}>
              Cognitive behavior therapy can be highly effective for many
              disorders
            </div>
            <div className={css(styles.cbtText)}>
              CBT uses proven practical techniques to resolve many issues by
              changing the way you think, feel and behave. <br />
              <br /> CBT helps to examine and explore ‘the relationships between
              thoughts, feelings’, bodily reactions ‘and behaviors’. ‘By
              exploring patterns’ of unhelpful or irrational ‘thinking that are
              leading to and keeping unhelpful behaviours ‘and the beliefs that
              underline these unhelpful thinking, people with’ poor mental
              health’ may challenge and adjust their unhelpful thinking and
              beliefs to help them improve their coping with difficult
              situations.
            </div>
            <div className={css(styles.cbtexample)}>
              Examples of unhelpful thoughts and beliefs in CBT:
            </div>
            <ul
              style={{
                padding: "0 0 0 20px",
                listStyleType: "square",
                marginBottom: 43,
              }}
            >
              <li className={css(styles.exampleList)}>
                <span className={css(styles.exampleListSpan)}>
                  A depressed person may believe, “I am worthless.’’
                </span>
              </li>
              <li className={css(styles.exampleList)}>
                <span className={css(styles.exampleListSpan)}>
                  A person with panic disorder may believe, “I am in danger.”
                </span>
              </li>
            </ul>
            <img src={Images.cbt_imgTwo} className={css(styles.cbtImgTwo)} />
          </div>

          <div className={css(styles.CBTInerContTwo)}>
            <img src={Images.cbt_imgOne} className={css(styles.cbtImgOne)} />
            <div className={css(styles.cbtTextTwoCont)}>
              <div className={css(styles.cbtTextTwo)}>
                CBT encourages people to view irrational ‘beliefs as hypotheses’
                and not facts. This gives people a chance ‘to test out’ their
                irrational ‘beliefs by doing an experiment.
              </div>
              <div className={css(styles.cbtexample)}>
                CBT requires the therapist and the client to ‘work together’ to
                set goals, solve problems and set homework to be completed
                between the sessions. Studies have shown that CBT:
              </div>
              <ul
                style={{
                  padding: "0 0 0 20px",
                  listStyleType: "square",
                }}
              >
                <li className={css(styles.exampleList)}>
                  <span className={css(styles.exampleListSpan)}>
                    Changes brain activity’ and improves brain functioning.
                  </span>
                </li>
                <li className={css(styles.exampleList)}>
                  <span className={css(styles.exampleListSpan)}>
                    Is ‘as useful as antidepressant medications for some’ people
                    ‘with depression and may be superior in preventing relapse
                    of symptoms’.
                  </span>
                </li>
                <li className={css(styles.exampleList)}>
                  <span className={css(styles.exampleListSpan)}>
                    Clients ‘’who receive CBT in addition to treatment with
                    medication have better outcomes than patients who do not
                    receive CBT as an additional treatment’.
                  </span>
                </li>
                <li className={css(styles.exampleList)}>
                  <span className={css(styles.exampleListSpan)}>
                    Source/Acknowledged: Ken Duckworth, M.D., and Jacob L.
                    Freedman, M.D., July 2012
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
