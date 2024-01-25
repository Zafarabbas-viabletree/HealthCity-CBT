// @flow
import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import _ from "lodash";
import styles from "./BookPDFModalBoxStyles";
import { css } from "aphrodite";
import RadioSection from "../../pages/BookingForm/RadioSection";
import { AppStyles } from "../../theme";
import { Button } from "react-bootstrap";

export default function BookPDFModalBoxView(props) {
  const {
    isModalOpen,
    onCloseModal,
    selectedItem,
    onFeesTypeChange,
    FREE_DOWNLOAD,
    PAID_DOWNLOAD,
    GET_PRINTED_COPY,
  } = props;

  return (
    <Modal
      showCloseIcon={false}
      center
      open={isModalOpen}
      onClose={onCloseModal}
      classNames={{
        overlay: "customOverlay",
        modal: "bookPDFBoxModal",
      }}
    >
      <div className={css(styles.itemContainer)}>
        <img src={selectedItem.image} className={css(styles.itemImage)} />

        <div
          style={{ background: selectedItem.bgColor }}
          className={css(styles.bookBox)}
        >
          <h6 className={css(styles.bookHeading)}>BOOK</h6>

          <h4 className={css(styles.bookTitle)}>{selectedItem.title}</h4>
        </div>

        <div className={`${css(styles.mainContainer)}`}>
          <div className={`mt-5`}>
            <RadioSection
              isHorizontal={true}
              onChange={onFeesTypeChange}
              listData={[
                {
                  value: FREE_DOWNLOAD,
                  text: "Free Download",
                },
                {
                  value: PAID_DOWNLOAD,
                  text: "Paid Download",
                },
                {
                  value: GET_PRINTED_COPY,
                  text: "Get Printed Copy",
                },
              ]}
            />
          </div>

          <div className={`mt-5`}>
            <h6 className={css(styles.fillFormHead)}>
              Fill below form to get your a free Copy of book
            </h6>
            <form>
              <div className={`form-row mb-1`}>
                <div className={`col-md-6 ${css(styles.formGroup)}`}>
                  <input
                    type="text"
                    className={`${css(styles.formControl)}`}
                    name="fullname"
                    // value={fullname}
                    onChange={(event) => {
                      props.setValue({
                        fullname: event.target.value,
                        fullnameError: "",
                      });
                    }}
                    placeholder="Full Name"
                  />
                  <span className={`${css(AppStyles.formError)}`}>
                    {props.fullnameError}
                  </span>
                </div>
                <div className={`col-md-6 ${css(styles.formGroup)}`}>
                  <input
                    type="email"
                    className={`${css(styles.formControl)}`}
                    name="email"
                    // value={email}
                    onChange={(event) => {
                      props.setValue({
                        email: event.target.value,
                        emailError: "",
                      });
                    }}
                    placeholder="Email Address"
                  />
                  <span className={`${css(AppStyles.formError)}`}>
                    {props.emailError}
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className={css(styles.btnContainer)}>
            <div className={css(styles.checkboxCont)}>
              <label class="containerone">
                I agree for my details to be used for marketing purposes
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <Button className={css(styles.downloadBtn)}>Download</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
