import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function WelcomeComponent() {
  return (
    <div className="flex overflow-hidden bg-neutral w-full min-h-screen justify-center items-center p-4 ">
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <div className="mb-6 text-sky-900" >
            <p className="text-3xl sm:text-4xl font-bold">保育園管理システム</p>
            <p className="text-base mt-3 ">子供たちを最優先にし、変化を受け入れ、協力することが戦略。</p>
          </div>
          <div>
            <p className=" text-base mt-20 mb-2  text-sky-900">アカウントは、お持ちですか？</p>
            <div className="flex justify-center space-x-4 mb-1">
              <Link to="/login">
                <Button variant="contained" size="large">ログイン</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


