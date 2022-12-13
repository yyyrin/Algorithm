# [BOJ] 1085. 직사각형에서 탙출
# 직사각형의 경계선까지 가는 거리의 최소값

input_ = list(map(int, input().split()))  # [x, y, w, h]
# (x, y) : 현재 위치 / (w, h) : 직사각형의 오른쪽 위 꼭짓점

ans_list = [input_[2] - input_[0], input_[3] - input_[1], input_[0], input_[1]]
# w-x, h-y, x, y

print(min(ans_list))  # 결과 중 최소값 출력

#---------
# 이건 한 달 전에 짠 코드
# x, y, w, h = map(int, input().split())
# res = [x, y, w-x, h-y]
# print(min(res))

# 알고..진짜 다 까먹었나보다. 1일 1알고 가자.