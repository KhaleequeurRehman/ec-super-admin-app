import * as Yup from "yup";
import {SUPPORTED_IMAGE_FORMATS} from "../config"

export const signUpSchema = Yup.object({
  // username: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(2).max(12).required("Please enter your password"),
  // bio: Yup.string().min(2).max(1000).required("Please enter your bio"),
  // dribbble: Yup.string().min(2).max(100).required("Please enter your dribbble link"),
  // behance: Yup.string().min(2).max(100).required("Please enter your behance link"),
  // instagram: Yup.string().min(2).max(100).required("Please enter your instagram link"),
  // avatar: Yup.mixed().nullable().required()
  // .test(
  //  "FILE_SIZE"
  // ,"Uploaded file is too big."
  // ,(value) => !value || (value && value.size <= 1024 * 1024)
  // ).test(
  //   "FILE_FORMAT"
  //  ,"Uploaded file has unsupported format."
  //  ,(value) => !value || (value && SUPPORTED_IMAGE_FORMATS.includes(value?.type))
  //  ),
  //  coverImage: Yup.mixed().nullable().required()
  // .test(
  //  "FILE_SIZE"
  // ,"Uploaded file is too big."
  // ,(value) => !value || (value && value.size <= 1024 * 1024)
  // ).test(
  //   "FILE_FORMAT"
  //  ,"Uploaded file has unsupported format."
  //  ,(value) => !value || (value && SUPPORTED_IMAGE_FORMATS.includes(value?.type))
  //  )

});