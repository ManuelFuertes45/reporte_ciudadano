from flask import request, jsonify
from dao.d_verifications import VerificationsDAO
from constants import HTTP_STATUS


class VerificationsHandler:

    def map_to_dict(self, verification):
        return {
            "id": verification[0],
            "title": verification[1],
            "description": verification[2],
            "status": verification[3],
            "created_by": verification[4],
            "validated_by": verification[5],
            "resolved_by": verification[6],
            "created_at": verification[7],
            "resolved_at": verification[8],
            "location": verification[9],
            "image_url": verification[10],
            "rating": verification[11],
        }

    def getAllVerifications(self):
        verifications = VerificationsDAO().getAllVerifications()
        verifications_dict_list = [self.map_to_dict(verification) for verification in verifications]
        return jsonify(verifications_dict_list), HTTP_STATUS.OK

    def getVerificationById(self, verification_id):
        verification = VerificationsDAO().getVerificationById(verification_id)

        if not verification:
            error_msg = {"error_msg": "Verification not found"}
            return jsonify(error_msg), HTTP_STATUS.NOT_FOUND

        verification_dict = self.map_to_dict(verification)
        return jsonify(verification_dict), HTTP_STATUS.OK

    def insertVerification(self, data):
        data = request.get_json()

        if not data:
            error_msg = {"error_msg": "Data not found"}
            return jsonify(error_msg), HTTP_STATUS.BAD_REQUEST

        try:
            title = data["title"]
            description = data["description"]
            status = data["status"]
            created_by = data["created_by"]
            validated_by = data["validated_by"]
            resolved_by = data["resolved_by"]
            created_at = data["created_at"]
            resolved_at = data["resolved_at"]
            location = data["location"]
            image_url = data["image_url"]
            rating = data["rating"]
        except KeyError as e:
            error_msg = {"error_msg": f"Missing field: {str(e)}"}
            return jsonify(error_msg), HTTP_STATUS.BAD_REQUEST

        inserted_verification = VerificationsDAO().insertVerification(
            title, description, status, created_by, validated_by, resolved_by, created_at, resolved_at, location, image_url, rating
        )
        if not inserted_verification:
            error_msg = {"error_msg": "Verification not inserted"}
            return jsonify(error_msg), HTTP_STATUS.INTERNAL_SERVER_ERROR

        inserted_verification_dict = self.map_to_dict(inserted_verification)
        return jsonify(inserted_verification_dict), HTTP_STATUS.CREATED

    def updateVerification(self, verification_id):
        dao = VerificationsDAO()
        data = request.get_json()

        if not data:
            return jsonify({"error_msg": "Data not found"}), HTTP_STATUS.BAD_REQUEST

        if not dao.getVerificationById(verification_id):
            return jsonify({"error_msg": "Verification not found"}), HTTP_STATUS.NOT_FOUND

        status = data.get("status")
        rating = data.get("rating")

        if status is None or rating is None:
            return jsonify({"error_msg": "Missing status or rating"}), HTTP_STATUS.BAD_REQUEST

        updated_verification = dao.updateVerification(verification_id, status, rating)

        if not updated_verification:
            return jsonify({"error_msg": "Verification not updated"}), HTTP_STATUS.INTERNAL_SERVER_ERROR

        updated_verification_dict = self.map_to_dict(updated_verification)
        return jsonify(updated_verification_dict), HTTP_STATUS.OK


    def deleteVerification(self, verification_id):
        dao = VerificationsDAO()

        if not dao.getVerificationById(verification_id):
            error_msg = {"error_msg": "Verification not found"}
            return jsonify(error_msg), HTTP_STATUS.NOT_FOUND

        deleted_verification = dao.deleteVerification(verification_id)

        if not deleted_verification:
            error_msg = {"error_msg": "Verification not deleted"}
            return jsonify(error_msg), HTTP_STATUS.INTERNAL_SERVER_ERROR

        return "", HTTP_STATUS.NO_CONTENT

