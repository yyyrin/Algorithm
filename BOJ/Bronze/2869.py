# [BOJ] 2869. 달팽이는 올라가고 싶다

# A: 낮에 올라가는 거리 / # B: 밤에 미끄러지는 거리 / V: 나무 막대 높이
A, B, V = map(int, input().split())

#---------------------
# 시간초과 발생 코드-> day를 구할 때까지 while문을 반복하기 때문에 발생
# day를 바로 도출해야 함
# day = 0
# go = 0
# while True:
#     day += 1
#     go += A
#     if go >= V:
#         print(day)
#         break
#     go -= B
#-------------------------
# A * day - B * (day-1) => V
# day >= (V-B)//(A-B)
day = (V-B) / (A-B)   # 막대를 모두 올라갈 때 걸리는 일수
if day == int(day):
    print(int(day))
else:
    print(int(day) + 1)