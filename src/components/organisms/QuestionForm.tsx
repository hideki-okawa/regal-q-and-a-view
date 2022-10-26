import { useState } from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";

import { postQuestion } from "../../lib/api/Question";

export default function QuestionForm() {
	const [userName, setUserName] = useState("");
	const [userNameError, setUserNameError] = useState<any>(null);
	const [content, setContent] = useState("");
	const [contentError, setContentError] = useState<any>(null);
	const [title, setTitle] = useState("");
	const [titleError, setTitleError] = useState<any>(null);
	const [submitError, setSubmitError] = useState<any>(null);

	const changeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputUserName = event.target.value;
		if (inputUserName.length > 20) {
			setUserNameError("20文字以下で入力してください");
		} else if (inputUserName.length < 3) {
			setUserNameError("3文字以上で入力してください");
		} else {
			setUserNameError(null);
		}
		setUserName(inputUserName);
	};

	const changeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputContent = event.target.value;
		if (inputContent.length > 1000) {
			setContentError("1000文字以下で入力してください");
		} else if (inputContent.length < 50) {
			setContentError("50文字以上で入力してください");
		} else {
			setContentError(null);
		}
		setContent(inputContent);
	};

	const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputTitle = event.target.value;
		if (inputTitle.length > 50) {
			setTitleError("50文字以下で入力してください");
		} else if (inputTitle.length < 10) {
			setTitleError("10文字以上で入力してください");
		} else {
			setTitleError(null);
		}
		setTitle(inputTitle);
	};

	const handlePostQuestion = () => {
		const error = postQuestion(userName, title, content);
		if (error) {
			setSubmitError(`エラーが発生しました。（${error}）`);
		}
	};

	return (
		<>
			<Form>
				<Form.Field
					control={Input}
					label="ニックネーム ※必須"
					placeholder="例）匿名希望"
					onChange={changeUserName}
					error={userNameError}
				/>
				<div>※3文字以上20文字以内、記号不可</div>
				<div>※個人が特定できないものにしてください</div>
				<Form.Field
					control={Input}
					label="質問文（質問のタイトル）※必須"
					onChange={changeTitle}
					error={titleError}
				/>
				<div>※10文字以上50文字以下で入力してください</div>
				<Form.Field
					control={TextArea}
					label="相談内容 ※必須"
					placeholder="いつ、どこで、だれが"
					onChange={changeContent}
					error={contentError}
				/>
				<div>※50文字以上入力してください</div>
				<Form.Field
					control={Button}
					onClick={handlePostQuestion}
					disabled={userNameError || titleError || contentError}
					error={submitError}
				>
					投稿する
				</Form.Field>
			</Form>
		</>
	);
}
