import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { FirebaseContext } from "../../../firebase";
import useValidation from "../../../hooks/useValidation";
import validateCreateProject from "../../../validations/validateCreateProject";
import FileUploader from "react-firebase-file-uploader";
import Swal from "sweetalert2";

const STATE_INICIAL = {
  title: "",
  slug: "",
  shortDesc: "",
  url: "",
  langs: [],
  largeDesc: "",
  urlPhoto: "",
};

const firebaseErrors = {
  "auth/email-already-in-use":
    "La dirección de correo electrónico ya está siendo utilizada por otra cuenta.",
};

const ProjectTab = () => {
  const langsCheck = [
    { id: "1", name: "react" },
    { id: "2", name: "redux" },
    { id: "3", name: "gatsby" },
    { id: "4", name: "html5" },
    { id: "5", name: "css3" },
    { id: "6", name: "javascript" },
    { id: "7", name: "sass" },
    { id: "8", name: "bootstrap" },
    { id: "9", name: "flutter" },
    { id: "10", name: "mongodb" },
    { id: "11", name: "nodejs" },
  ];

  const { user, firebase } = useContext(FirebaseContext);

  const { values, errors, submitFrom, handleChange, handleSubmit, handleBlur } =
    useValidation(STATE_INICIAL, validateCreateProject, registerProject);

  const { title, slug, shortDesc, url, largeDesc } = values;

  const router = useRouter();

  const [checkedState, setCheckedState] = useState(
    new Array(langsCheck.length).fill(false)
  );

  const [langsArr, setLangsArr] = useState([]);

  const [imageName, setImageName] = useState("");
  const [upLoading, setUpLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [urlImage, setUrlImage] = useState("");

  const handleOnChangeCheck = (position) => {
    langsArr = [];
    setLangsArr(langsArr);

    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);

    updatedCheckedState.map((item, index) => {
      if (item) {
        langsArr.push(langsCheck[index].name);
      }
    });

    setLangsArr(langsArr);
  };

  const handleUploadStart = () => {
    setProgress(0);
    setUpLoading(true);
  };

  const handleUploadError = (error) => {
    setUpLoading(error);
    console.error(error);
  };

  const handleProgress = (progress) => {
    setProgress({ progress });
  };

  const handleUploadSuccess = async (name) => {
    setProgress(100);
    setUpLoading(false);
    setImageName(name);
    firebase.storage
      .ref("projects")
      .child(name)
      .getDownloadURL()
      .then((url) => {
        setUrlImage(url);
      });
  };

  async function registerProject() {
    try {
      if (!user) {
        return router.push("/");
      }
      const project = {
        title,
        slug,
        shortDesc,
        url,
        largeDesc,
        langs: langsArr,
        urlImage
      };
      console.log(project);

      await firebase.db.collection("projects").add(project);

      Swal.fire("Good Job!", "Project registered success!", "success");

      return router.push("/dashboard");
    } catch (error) {
      console.error("Hubo un error al crear el producto", error.code);
      throw (firebaseErrors[error.code] || error.message, console.log(error));
    }
  }

  return (
    <>
      <div className="card bg-light col-12 col-md-12">
        <div className="card-body p-md-12 p-5">
          <div className="row">
            <div className="col-12">
              <form
                className="contact-form needs-validation"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="messages"></div>
                <div className="row gx-4">
                  <div className="col-12">
                    <h1 className="mb-4 ">Register Project</h1>
                    <div className="form-floating mb-4">
                      <input
                        id="frm_title"
                        type="text"
                        name="title"
                        className="form-control border-2"
                        required="required"
                        value={title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="frm_title">Title *</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating mb-4">
                      <input
                        id="frm_slug"
                        type="text"
                        name="slug"
                        className="form-control border-2"
                        required="required"
                        value={slug}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="frm_slug">Slug *</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating mb-4">
                      <input
                        id="frm_shortDesc"
                        type="shortDesc"
                        name="shortDesc"
                        className="form-control border-2"
                        required="required"
                        value={shortDesc}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="frm_slug">Short description *</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating mb-4">
                      <input
                        id="frm_URL"
                        type="text"
                        name="url"
                        className="form-control border-2"
                        required="required"
                        value={url}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="frm_slug">Project URL*</label>
                    </div>
                  </div>

                  <div className="col-12 d-flex flex-wrap">
                    {langsCheck.map(({ name }, index) => (
                      <div
                        key={index}
                        className="form-group form-check mb-4 m-2"
                      >
                        <input
                          name={name}
                          type="checkbox"
                          id={`custom-checkbox-${index}`}
                          className="form-check-input"
                          checked={checkedState[index]}
                          onChange={() => handleOnChangeCheck(index)}
                        />
                        <label htmlFor={name} className="form-check-label">
                          {name}
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="col-12">
                    <div className="form-floating mb-4 border-2">
                      <textarea
                        id="frm_largeDesc"
                        name="largeDesc"
                        className="form-control border-2"
                        placeholder="Your desc"
                        style={{ height: 150 }}
                        value={largeDesc}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                      <label htmlFor="frm_desc">Large Description *</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating mb-4">
                      <FileUploader
                        className="form-control border-2"
                        accept="image/*"
                        name="image"
                        id="image"
                        randomizeFilename
                        storageRef={firebase.storage.ref("projects")}
                        onUploadStart={handleUploadStart}
                        onUploadError={handleUploadError}
                        onUploadSuccess={handleUploadSuccess}
                        onProgress={handleProgress}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <input
                      type="submit"
                      className="btn btn-outline-primary rounded-pill btn-send"
                      value="Register Project"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectTab;
